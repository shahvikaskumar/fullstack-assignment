const express = require('express');
const cors = require('cors');
const conn = require('./Utility/connectdb');
const cardroutes = require('./routes/card_route');
const { PORT } = require('./Utility/config');

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Check server status
app.get('/ping', (req,res) => {
    res.status(200).json({message:"Server is running."});
});

// Card routes
app.use('/', cardroutes);

// Start server
const startserver = async() => {
    try{

        // Connect to MongoDB
        await conn();
        app.listen(PORT, () => {
            console.log(`Server is running on a ${PORT}`);
        });
    }
    catch(error){
        console.error('Failed to start server: ', error);

        // Exit on failure
        process.exit(1);
    }
};

startserver();

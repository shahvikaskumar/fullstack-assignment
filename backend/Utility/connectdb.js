const mongoose = require('mongoose');
const { MONGODB_URL} = require('./config');
const card = require('../models/card_model.js');
const carddata = require('./carddata.js');

// Function to connect to MongoDB Database
const connectdb = async() => {
   try{
        // Attempt to connect to the MongoDB database using the provided URL
        await mongoose.connect(MONGODB_URL);
        console.log("Database connection successfully");
        
        // Ensure the card model is registered
        card;
        let count =0;
        for(const item of carddata){

            // Check if the record exists
            const existrecord = await card.findOne({_id : item._id});
            if(!existrecord){
                
                // If the record doesn't exist, create it
                await card.create(item);
                count++;
            }           
        }

        // Log the result
        if(count > 0){
            console.log(`${count} record imported succesfully.`);
        }
   } 
   catch(error){

        // Handle specific Mongoose server selection errors
        if(error.name === 'MongooseServerSelectionError'){
            console.error('Error: Connection refused. Please check if your MongoDB server is running and accessible.');
        }
        else{
            console.error('Error while connecting to Database serve:', error);
        }

        // Exit the process with failure if the database connection fails
        process.exit(1);
   } 
};

// Export the connectdb function for use in the main server file
module.exports = connectdb;
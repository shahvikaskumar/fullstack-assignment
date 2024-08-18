const cardmodel = require('../models/card_model'); 

//#region Creating new Card
const Createcard = async(req,res) => {
    try{

        const {title, description} = req.body;

        // Validate request body
        if(!title || !description){
           return res.status(404).json({error:'Title or Description are empty'});
        }

        // Create a new card instance
        const newcard = new cardmodel({title, description});
        await newcard.save();

        // Send a success response with the created card
        res.status(201).json({success:"Card is successfully created.", card:newcard});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:'Error creating the card'});
    }
};
//#endregion

//#region Fetching all cards
const Getallcard = async(req, res) => {
    try{
        const cards = await cardmodel.find();

        // Check if cards exist
        if(!cards){
            return res.status(404).json({error:'Cards not found'});
        }

        // Send a success response with the retrieved cards
        res.status(200).json({success:'All cards fetched successfully.', cards:cards});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:'error fetching card'});
    }
};
//#endregion

//#region Fetching specific card only
const Getsinglecard = async(req,res) => {
    try{
        const { title } = req.params;       
        const card = await cardmodel.findOne({title});
       
        // Check if the card exists
        if(!card){
            return res.status(404).json({error:'Card not found.'});
        }

        // Send a success response with the retrieved card
        res.status(200).json({success:'Card fetched successfully.', card:card});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Error fetching the card.'});
    }
};
//#endregion

// Export the controller functions for use in the routes
module.exports = {Createcard, Getallcard, Getsinglecard};
const mongoose = require('mongoose');

//#region Card Schema
const cardschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },

    description:{
        type:String,
        required:true,
    },


},{timestamps:true});
//#endregion

// Export the Card model
module.exports = mongoose.model('Card', cardschema);
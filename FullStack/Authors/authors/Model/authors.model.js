const mongoose = require('mongoose');
const AuthorsSchema = new mongoose.Schema({
    Name: { 
        type: String,
        required: [
            true,
            "Title is required"
        
        ], minLength: 3

    },

}, { timestamps: true });
module.exports.Authors = mongoose.model('Authors', AuthorsSchema);
const mongoose = require('mongoose');
 
const joke = new mongoose.Schema({
    setup: String,
    punchline: String
});
 
const joke = mongoose.model('jokeSchema', joke);
 
module.exports = joke;

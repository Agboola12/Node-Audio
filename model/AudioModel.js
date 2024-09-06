const  mongoose  = require('mongoose');

const AudioSchema = mongoose.Schema({
    encodedAudio: String,
    
}, {timestamps:true})


const Audio = mongoose.model("Audio", AudioSchema);

module.exports = Audio
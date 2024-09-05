const  mongoose  = require('mongoose');

const AudioSchema = mongoose.Schema({
    encodedAudio: String,
    
}, {timestamps:true})


const Audio = mongoose.model("adminChurch", AudioSchema);

module.exports = Audio
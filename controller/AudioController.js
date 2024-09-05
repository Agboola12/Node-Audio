const Audio = require("../model/AudioModel");


const AudioEncode = async (req, res) => {  
    const { encodedAudio } = req.body;

    try {
        const newAdmin = await Audio.create({ encodedAudio });
        return res.status(201).json({
            status: true,
            message: "New Audio has been added",
            data: newAdmin,
        });
    } catch (error) {
        console.error(error);
        return res.status(203).json({
            status: false,
            message: "Oops, try again later.",
        });
    }
};

module.exports ={ AudioEncode }
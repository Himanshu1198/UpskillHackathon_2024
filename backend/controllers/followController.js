const { CustomError } = require('../utils');
const User = require('../models/user.model'); // Import the User model

const followUser = async (req, res) => {
    try {
        const followerId = req.query.followerId;
        const followedToId = req.query.followedToId;

        // Validate if followerId and followedToId are provided
        if (!followerId || !followedToId) {
            throw new CustomError({ status: 400, message: "Follower ID and followed-to ID are required" });
        }

        // Update the followed user's document to add the followerId to the followers array
        await User.findByIdAndUpdate(followedToId, { $addToSet: { followers: followerId } });

        //Udate the Users following document 
        await User.findByIdAndUpdate(followerId,{$addToSet:{following: followedToId}});
        // Send success response
        res.status(200).json({ success: true, message: "User followed successfully" });
    } catch (error) {
        // Handle errors
        console.error("Error in follow API:", error);
        if (error instanceof CustomError) {
            res.status(error.status).json({ success: false, message: error.message });
        } else {
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
};



module.exports = followUser;

const { CustomError } = require('../utils/error');
const User = require('../models/user.model'); // Import the User model

const followUser = async (req, res) => {
    try {
        const followerId = req.query.followerId;
        const followedToId = req.query.followedToId;
        console.log(followerId,followedToId)
        // Validate if followerId and followedToId are provided
        if (!followerId || !followedToId) {
            res.status(error.status).json({ success: false, message: 'follower Id or Followed to ID are undefined' });
        }

        // Update the followed user's document to add the followerId to the followers array
        await User.findByIdAndUpdate(followedToId, { $addToSet: { Mentors: followerId } });

        //Udate the Users following document 
        await User.findByIdAndUpdate(followerId,{$addToSet:{Mentees: followedToId}});
        // Send success response
        res.status(200).json({ success: true, message: "User followed successfully" });
    } catch (error) {
        // Handle errors
        console.error("Error in follow API:", error);
        if (error instanceof CustomError) {
            res.status(error.status).json({ success: false, message: error.message });
        } else {
            res.status(500).json({ success: false, message: 'follower Id or Followed to ID are undefined' });
        }
    }
};

 

const unfollow = async (req, res) => {
    try {
        const followerId = req.query.followerId;
        const followedToId = req.query.followedToId;

        // Validate if followerId and followedToId are provided
        if (!followerId || !followedToId) {
            return res.status(400).json({ success: false, message: "Follower ID or followed-to ID are undefined" });
        }

        // // Find the follower and followed user
        // const follower = await User.findById(followerId);
        // const followedTo = await User.findById(followedToId);

        // Check if both users exist
        // if (!follower || !followedTo) {
        //     return res.status(404).json({ success: false, message: "Follower or followed-to user not found" });
        // }

        // Remove the followed user's ID from the follower's mentors array
        const updatedFollower = await User.findByIdAndUpdate(
            followerId,
            { $pull: { mentors: followedToId } },
            { new: true }
        );

        // Remove the follower's ID from the followed user's mentees array
        const updatedFollowedTo = await User.findByIdAndUpdate(
            followedToId,
            { $pull: { Mentees: followerId } },
            { new: true }
        );


        // Send success response
        res.status(200).json({ success: true, message: "User unfollowed successfully" });
    } catch (error) {
        console.error("Error in unfollow controller:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};






module.exports = {followUser,unfollow};

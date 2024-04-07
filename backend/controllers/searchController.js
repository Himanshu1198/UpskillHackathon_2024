// userController.js

const User = require('../models/user.model');

// Controller function to search users with pagination
const searchUsers = async (req, res) => {
    try {
        // Extract query parameters from the request
        const { name, skills, industry, page = 1, limit = 10 } = req.query;
        // Prepare the search query
        const query = {};
        // Add conditions for name, skills, and industry if provided
        if (name) {
            query.name = { $regex: name, $options: 'i' }; // Case-insensitive search
        }
        if (skills) {
            query.skills = { $in: skills }; // Match users with any of the provided skills
        }
        if (industry) {
            query.industry = { $regex: industry, $options: 'i' }; // Case-insensitive search
        }
        

        // Calculate the skip value for pagination
        const skip = (page - 1) * limit;

        // Execute the search query with pagination
        const users = await User.find(query).skip(skip).limit(parseInt(limit));

        // Send the response
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        // Handle errors
        console.error('Error in searching users:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = { searchUsers };

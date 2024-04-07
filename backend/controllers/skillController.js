// controller.js

const Skill = require('../models/skill.model'); // Assuming you have a Skill model defined

// Controller function to search for skills
const searchSkills = async (req, res) => {
    try {
        // Extract the search query from the request parameters
        const searchQuery = req.query.q;

        // Create a regular expression pattern for the search query
        const regexPattern = new RegExp(searchQuery, 'i'); // 'i' flag for case-insensitive search

        // Search for skills matching the regex pattern, limiting to top 10 results
        const skills = await Skill.find({ name: { $regex: regexPattern } }).limit(10);

        // Send the response
        res.status(200).json({
            success: true,
            data: skills
        });
    } catch (error) {
        // Handle errors
        console.error("Error in searchSkills controller:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = {
    searchSkills
};

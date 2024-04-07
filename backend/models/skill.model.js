// skill.model.js

const mongoose = require('mongoose');

// Define the schema for the Skill model
const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

// Create the Skill model using the schema
const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;

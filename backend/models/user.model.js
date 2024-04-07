const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    img: {
        type: String,
        default: 'https://thumbs.dreamstime.com/z/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg?ct=jpeg'
    },
    isMentor: {
        type: Boolean,
        default: false
    },
    Mentors: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
    Mentees: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: []
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);

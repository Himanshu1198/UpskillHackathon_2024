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
    img:{
        type: String,
        required: [false,''],
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw09GT5QCVMmmFKm6AK6u0AM&ust=1712493813748000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOj_gt7OrYUDFQAAAAAdAAAAABAE'
    },
    isMentor: {
        type: Boolean,
        required: false,
        default: false
    },
    mentors: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
    mentees: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: []
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);

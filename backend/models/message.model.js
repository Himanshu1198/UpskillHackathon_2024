const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    sender: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'User', 
         required: true 
        }, // Reference to the User model
    recipient: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true }, // Reference to the User model
    content: {
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['unread', 'read', 'archived'], // Define possible values for the status
        default: 'unread' // Set the default status to 'unread'
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    }
});


const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

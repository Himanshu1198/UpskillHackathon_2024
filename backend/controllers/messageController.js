// userController.js
const Message = require('../models/message.model');

// Controller function to fetch user messages
const getUserMessage = async (req, res) => {
    try {
        // Assuming the user ID is available in req.user
        const userId = req.query.userId
        
        // Fetch messages for the user from the database
        const messages = await Message.find({ recipient: userId }).populate('sender', 'name');

        res.status(200).json({ success: true, messages });
    } catch (error) {
        console.error('Error fetching user messages:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

// Controller function to receive messages with specific sender and receiver IDs
const receiveMessage = async (req, res) => {
    try {
        // Extract sender and receiver IDs from query parameters
        const senderId = req.query.senderid;
        const receiverId = req.query.receiverid;

        // Validate sender and receiver IDs
        if (!senderId || !receiverId) {
            return res.status(400).json({ success: false, error: 'Sender ID and Receiver ID are required' });
        }

        // Fetch messages with specific sender and receiver IDs from the database
        const messages = await Message.find({ sender: senderId, receiver: receiverId }).populate('sender', 'name').populate('receiver', 'name');

        // Respond with the fetched messages
        res.status(200).json({ success: true, messages });
    } catch (error) {
        console.error('Error receiving messages:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

// Controller to send message 
const sendMessage = async (req, res) => {
    try {
        const { senderId, receiverId, messageContent } = req.body;

        // Check if all required parameters are provided
        if (!senderId || !receiverId || !messageContent) {
            return res.status(400).json({ success: false, error: 'Sender ID, Receiver ID, and Message are required' });
        }
        
        // Create a new message object
        const newMessage = await Message.create({
            sender: senderId,
            recipient: receiverId,
            content: messageContent,
        });
        
        // Return the newly created message
        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};



module.exports = { getUserMessage,receiveMessage,sendMessage };

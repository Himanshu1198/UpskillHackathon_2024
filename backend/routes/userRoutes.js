const express = require('express')
const router=express.Router()
const {registerUser,loginUser,getMe}=require('../controllers/userController')
const {getUserMessage,receiveMessage, sendMessage} = require('../controllers/messageController');
const {protect}=require('../middleware/authMiddleware')
const {getUsers} = require('../controllers/userController')
// const {follow} = require()

router.post('/register', registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)
router.get('/getuser',getUsers)

//Message routes
router.get('/message',protect, receiveMessage,getUserMessage)
router.post('/message',sendMessage)


// Follow people routes
// router.get('/following',follow)

module.exports =router


const express = require('express')
const router=express.Router()
const {registerUser,loginUser,getMe}=require('../controllers/userController')
const {getUserMessage,receiveMessage, sendMessage} = require('../controllers/messageController');
const {protect}=require('../middleware/authMiddleware')
const {getUsers} = require('../controllers/userController')
const {followUser,unfollow} = require('../controllers/followController')
const {searchSkills} = require('../controllers/skillController')


router.post('/register', registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)
router.get('/getuser',getUsers)

//Message routes
router.get('/message',protect, receiveMessage,getUserMessage)
router.post('/message',sendMessage)


// Follow people routes
router.post('/follow',followUser)
router.post('/unfollow',unfollow)
module.exports =router


//skills Routes

router.get('/',searchSkills)
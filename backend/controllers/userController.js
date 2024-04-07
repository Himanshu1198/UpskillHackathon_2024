
const asyncHandler=require('express-async-handler')
const bcrypt = require('bcryptjs')
const User=require('../models/user.model')
const jwt=require('jsonwebtoken')


const registerUser=asyncHandler(async(req,res)=>{

const { name , email , password }=req.body
    console.log(name,email,password)
//Validation
if(!name||!email||!password)
{
    
    res.status(400)
    throw new Error('Please include all fields')
}
//find user already exists
const userExists=await User.findOne({email})
if(userExists)
{
    res.status(400)
    throw new Error('User already exists')
}

//hash password
const salt=await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(password,salt)

//Create user
const user=await User.create({name,email,password:hashedPassword})
console.log(user)
if(user)
{
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        token:generateToken(user._id)
    })
}
else
{
    res.status(400)
    throw new error ('Invalid user data')
}
})

//login user

const loginUser = asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    console.log(req.body)
    const user=await User.findOne({email})
    if(user && (await bcrypt.compare(password,user.password)))
    {   console.log(user)
        res.status(200).json({
           user: user
        })
    }
    else
    {
        res.status(401)
        throw new Error('Invalid Credentials')
    }
})

const getMe=asyncHandler(async(req,res)=>{
    const user={
        id:req.user._id,
        name:req.user.name,
        email:req.user.email,
    }
res.status(200).json(user)
})


const generateToken=(id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:'30d',
})
}

//get all users 
const getUsers = async (req,res) => {
    try {
        console.log("here");
        const users =await User.find({});
        
        res.status(200).json({users})
    } catch (error) {
        throw error; // Re-throw the error to be caught by the caller
    }
};


module.exports ={
    registerUser,
    loginUser,getMe,getUsers
}
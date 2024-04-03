const express=require('express')
const colors=require('colors')
const dotenv=require('dotenv').config()
const connectDB=require('./config/db')
const {errorHandler}=require('./middleware/errorMiddleware')
const PORT =process.env.PORT ||8000
// const clientid="467342628248-lj5i1tssia0iau9b51i36g7le234lp64.apps.googleusercontent.com"
// const clientsecret="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"
connectDB()
const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/',(req,res)=>{
    res.status(200).json({message:'Welcome to the Api'})
})
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)
app.listen(PORT,()=>{console.log(`Server Started on port ${PORT}`)})
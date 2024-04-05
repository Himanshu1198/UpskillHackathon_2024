const mongoose = require('mongoose')
const connectDB =async()=>{
    try
    {
const conn=await mongoose.connect("mongodb+srv://bhumitmehta2209:FYlsU2fW1d60AMg4@cluster0.n4bns8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
console.log(`MongoDB connected :${conn.connection.host}`.cyan.underline) 
}
    catch(err)
    {
console.log(`Error: ${err.message}`.red.underline.bold)
process.exit(1)
    }
}
module.exports = connectDB
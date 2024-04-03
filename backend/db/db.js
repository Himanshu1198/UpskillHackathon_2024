const mongoose = require('mongoose');

const uri = "mongodb+srv://bhumitmehta2209:FYlsU2fW1d60AMg4@cluster0.n4bns8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// Function to establish the MongoDB connection
const connectDB = async () => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("mongo connected");
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit process with failure
  }
};

// Function to close the MongoDB connection
const closeDB = async () => {
  try {
    // Close the Mongoose connection
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  } catch (error) {
    console.error(error);
    process.exit(1); 
  }
};

// Export the connectDB and closeDB functions
module.exports = { connectDB, closeDB };

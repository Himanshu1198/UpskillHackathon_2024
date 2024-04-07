const { MongoClient } = require('mongodb');

// MongoDB connection string
const uri = 'mongodb+srv://bhumitmehta2209:FYlsU2fW1d60AMg4@cluster0.n4bns8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function connect() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await updateDocuments(client);
    } catch (error) {
        console.error( error);
    } finally {
        await client.close();
    }
}

async function updateDocuments(client) {
    const database = client.db('mentor');
    const collection = database.collection('users');
    try {
        const result = await collection.updateMany(
            {}, 
            { $set: { img: 'default.jpg' } } 
        );
        console.log(`${result.modifiedCount} documents updated`);
    } catch (error) {
        console.error('Error updating documents:', error);
    }
}
connect();

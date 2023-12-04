const mongoose = require('mongoose');


require('dotenv').config();

const uri = process.env.DB_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB...');
    }catch (err){
        console.error('Could not connect to MongoDB: ', err);
        process.exit(1);    
    }
}
const conn = mongoose.connection;
const Schema = mongoose.Schema;

module.exports = {
    connectDB,
    conn,
    Schema
};
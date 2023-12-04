const express = require('express');
const db = require('./config/db');
const app = express();
require('dotenv').config();

// Connect to Database
db.connectDB()

app.get('/', (req, res)=>{
    res.send('Welcome to Express Server');
});


// Start Server
const PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`Server is running on: ${PORT}`));
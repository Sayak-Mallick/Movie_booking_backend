const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
}).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Failed to connect to the database' + err);
});
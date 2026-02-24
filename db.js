const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
}).then(() => {
  console.log("✅ Connected To The Database");
}).catch((err) => {
    console.log('❌ MongoDB connection failed' + err);
});
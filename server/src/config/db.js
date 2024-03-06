const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try { 
        await mongoose.connect(process.env.mongoURL);

        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;


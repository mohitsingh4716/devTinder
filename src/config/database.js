const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || '';

const connectDB = async () => {
    await mongoose.connect(MONGODB_URI);
}




// const connectDB = async () => {
//     try {
//         await mongoose.connect(MONGODB_URI);
//         console.log("Database connected successfully");
//     } catch (err) {
//         console.error("Database connection failed:", err);
//         process.exit(1);
//     }
// }

// connectDB();

module.exports = connectDB;
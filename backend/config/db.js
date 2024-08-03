import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB connection');
    } catch (error) {
        console.log('DB connection error', error.message);
        throw error;
    }
};

export default connectDB;
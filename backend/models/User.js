import mongoose from "mongoose";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [emailRegex, 'invalid email']
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 10,
        minLenght: 4,
    },
    admin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
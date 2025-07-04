import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    photo:{
        type: String
    },
    likes:[{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Post",
       default: null
    }],
   
    lastLogin:{
        type: Date,
        default: Date.now(),   
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date,
}, { timestamps: true });

export const User = mongoose.model('user', userSchema);
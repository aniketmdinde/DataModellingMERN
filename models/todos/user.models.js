import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase:true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
        },
    }, 
    {
        //Always pass as Secondary Object
        timestamps: true //CreatedAt and Updated At
    }
)

export const User = mongoose.model("User", userSchema);
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        min:3,
        max:20
    },
    email:{
        type: String,
        required: true,
        unique: true,
        max:50,
    },
    password:{
        type: String,
        required: true,
        min:6,
        max:100
    },
    img:{
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},
{timestamps:true}
);

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        unique: true,
    },
    desc:{
        type: String,
        required: true,
    },
    img:{
        type: String,
    },
    userId:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
        unique: true,
    }
},
{timestamps:true}
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
/**
 * Exports the User model, which represents a user in the application. The User model is defined by the `userSchema` and includes fields for email, password, image, and admin status.
 */
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
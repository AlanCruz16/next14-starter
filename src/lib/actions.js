"use server"

import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export const addPost = async (formData) => {

    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");
    // const userId = formData.get("userId");

    const { title, desc, slug, userId } = Object.fromEntries(formData);


    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });
        await newPost.save();
        console.log("saved to db")
        revalidatePath("blog");

    } catch (error) {
        console.log(error);
        return { error: "Something went wrong with the save to db" }
    }


    console.log(title, desc, slug, userId)
}

export const deletePost = async (formData) => {

    const { id } = Object.fromEntries(formData);


    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db")
        revalidatePath("blog");

    } catch (error) {
        console.log(error);
        return { error: "Something went wrong with the delete to db" }
    }


    console.log(id)
}

export const register = async (formData) => {
    const { username, email, password, passwordRepeat, img } = Object.fromEntries(formData);
    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" }
    }
    try {
        connectToDb();

        const user = await User.findOne({ username });
        if (user) {
            return { error: "Username already exists" }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });
        await newUser.save();
        console.log("saved to db")

    } catch (error) {
        console.log(error);
        return { error: "Something went wrong with the save to db" }
    }
}
export const login = async (formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    }
    catch (error) {
        console.log(error);
        return { error: "Something went wrong with the login action" }
    }
}
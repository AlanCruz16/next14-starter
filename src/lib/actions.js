   "use server"

import { connectToDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

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
        return {error: "Something went wrong with the save to db"}
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
        return {error: "Something went wrong with the delete to db"}
    }


    console.log(id)
}
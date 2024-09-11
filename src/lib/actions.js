import { connectToDb } from "./utils";
import { Post } from "./models";

export const addPost = async (formData) => {
    "use server"

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
        
    } catch (error) {
        console.log(error);
        return {error: "Something went wrong with the save to db"}
    }


    console.log(title, desc, slug, userId)
}
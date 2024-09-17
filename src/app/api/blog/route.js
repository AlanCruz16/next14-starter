import { NextResponse } from "next/server";
import { Post } from "../../../lib/models";
import { connectToDb } from "../../../lib/utils"


export const GET = async (request) => {
    try {
        connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    }
    catch (error) {
        console.log(error);
        return new Response("Failed to fetch all posts", { status: 500 });
    }
}
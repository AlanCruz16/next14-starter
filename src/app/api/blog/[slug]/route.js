import { NextResponse } from "next/server";
import { Post } from "../../../../lib/models";
import { connectToDb } from "../../../../lib/utils";



export const GET = async (request,  { params }) => {

    const { slug } = params;


    try{
        connectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    }
    catch (error) {
        console.log(error);
        return new Response("Failed to fetch one post", { status: 500 });
    }
}
export const DELETE = async (request,  { params }) => {

    const { slug } = params;


    try{
        connectToDb();
        const post = await Post.deleteOne({slug});
        return NextResponse.json("Post deleted");
    }
    catch (error) {
        console.log(error);
        return new Response("Failed to fetch one post", { status: 500 });
    }
}
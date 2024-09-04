//fetch data without API

import { Post, User } from "./models";
import { connectToDb } from "./utils";

// const users = [
//     {id:1, name:'John'}
//     ,{id:2, name:'Mary'}
//     ,{id:3, name:'Bob'}
//     ,{id:4, name:'Jane'}
//     ,{id:5, name:'Jill'}
// ];

// const posts = [
//     {id:1, title:'Post 1', body:'This is post 1', userId:1}
//     ,{id:2, title:'Post 2', body:'This is post 2', userId:2}
//     ,{id:3, title:'Post 3', body:'This is post 3', userId:3}
//     ,{id:4, title:'Post 4', body:'This is post 4', userId:4}
//     ,{id:5, title:'Post 5', body:'This is post 5', userId:5}
// ]



export const getPosts = async () =>{
try{
    connectToDb();
    const posts = await Post.find({});
    return posts;
}
catch(error){
    console.log(error)
    throw new Error('Failed to fetch Posts!');
}
};

export const getPost = async (slug) =>{
    try{
        connectToDb();
        const post = await Post.findOne({slug:slug}).lean();
        return post;
    }
    catch(error){
        console.log(error)
        throw new Error('Failed to fetch Post!');
    }
};
export const getUsers = async () =>{
    try{
        connectToDb();
        const users = await User.find(id);
        return users;
    }
    catch(error){
        console.log(error)
        throw new Error('Failed to fetch Users!');
    }
};
export const getUser = async (id) =>{
    console.log(id);
    try{
        connectToDb();
        const user = await User.findById(id).lean();
        return user;
    }
    catch(error){
        console.log(error)
        throw new Error('Failed to fetch user!');
    }
};

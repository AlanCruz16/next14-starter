//fetch data without API

const users = [
    {id:1, name:'John'}
    ,{id:2, name:'Mary'}
    ,{id:3, name:'Bob'}
    ,{id:4, name:'Jane'}
    ,{id:5, name:'Jill'}
];

const posts = [
    {id:1, title:'Post 1', body:'This is post 1', userId:1}
    ,{id:2, title:'Post 2', body:'This is post 2', userId:2}
    ,{id:3, title:'Post 3', body:'This is post 3', userId:3}
    ,{id:4, title:'Post 4', body:'This is post 4', userId:4}
    ,{id:5, title:'Post 5', body:'This is post 5', userId:5}
]



export const getPosts = async () =>{
return posts;
};

export const getPost = async (id) =>{
    const post = posts.find(post => post.id === id);
    if (!post) {
        throw new Error('Post not found');
    }
    return post;
};
export const getUsers = async () =>{
    return users;
};
export const getUser = async (id) =>{
    const user = users.find(user => user.id === id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

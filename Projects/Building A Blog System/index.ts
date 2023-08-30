// Task 2: Building a Blog System
// Imagine you're developing a TypeScript application for a blogging platform. Create the following types and interfaces:
// Define an interface Author with properties like id, name, and bio.
// Create a type Comment that represents an object with author (of type Author), content, and timestamp.
// Define an interface Post with properties like id, title, content, author (of type Author), and an array of Comments.
// Implement a function that sorts posts based on their number of comments.


interface Author  {
    id: number,
    name: string,
    bio: string,
}

let author: Author = {
    id: 1,
    name: 'Hamza Waheed Abbasi',
    bio: 'Software Engineer'
}


type Comment1 =
    {
    author: string,
    content: string,
    timestamp: Date,
    }

let comments: Comment1 =
    {
    author: 'Saif',
    content: 'photo',
    timestamp: new Date(),
    }

interface Post {
    id: number,
    title: string,
    author: Author,
    comment: Comment1,
};
let posts: Post = {
    id: 1,
    title: 'I love Typescript',
    author: author,
    comment: comments,
};

function sortPost(post:Post) {
    for(let x in post) {
        console.log()
    }
}
sortPost(posts)
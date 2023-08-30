"use strict";
// Task 2: Building a Blog System
// Imagine you're developing a TypeScript application for a blogging platform. Create the following types and interfaces:
// Define an interface Author with properties like id, name, and bio.
// Create a type Comment that represents an object with author (of type Author), content, and timestamp.
// Define an interface Post with properties like id, title, content, author (of type Author), and an array of Comments.
// Implement a function that sorts posts based on their number of comments.
let author = {
    id: 1,
    name: 'Hamza Waheed Abbasi',
    bio: 'Software Engineer'
};
let comments = [
    {
        author: 'Saif',
        content: 'photo',
        timestamp: new Date(),
    },
    {
        author: 'Jamal',
        content: 'photo',
        timestamp: new Date(),
    },
    {
        author: 'Anas',
        content: 'photo',
        timestamp: new Date(),
    },
];
;
let post = {
    id: 1,
    title: 'I love Typescript',
    author: author,
    comment: comments,
};
function sortPost(post) {
    for (let x in post) {
        console.log(post);
    }
}
sortPost(post);

#!/usr/bin/env node

import chalk from "chalk";
import showBanner from "node-banner";

(async () => {
    await showBanner('Blog System', 'by Hamza Waheed Abbasi');
})();

interface Author  {
    id: number,
    name: string,
    bio: string,
}

type Comments = {
    author: Author,
    content: string,
    timestamp: Date,
    }

interface Post {
    id: number,
    title: string,
    author: Author,
    comments: Comments[],
};

type arrPosts = Post[];

let posts: arrPosts = [
    {
    id: 1,
    title: 'Natural Beauty',
    author: {
        id: 1,
        name: 'Hamza Waheed Abbasi',
        bio: 'Software Developer'
    },
    comments: [
        {
            author: {
                id: 1,
                name: 'Awais Yameen',
                bio: 'Teacher'
            },
            content: 'Wow! ',
            timestamp: new Date(),
        },
        {
            author: {
                id: 2,
                name: 'Saif Mughal',
                bio: 'Web Developer'
            },
            content: 'Niceee!',
            timestamp: new Date(),
        },
        ]
        },
        {
            id: 2,
            title: 'By the Seaside',
            author: {
                id: 2,
                name: 'Jamal Wajid',
                bio: 'Businessman'
            },
            comments: [
                {
                    author: {
                        id: 3,
                        name: 'Anas Tufail',
                        bio: 'Businessman'
                    },
                    content: 'Really cool..!',
                    timestamp: new Date(),
                },
            ]
        },
        {
            id: 3,
            title: 'The Wild Places',
            author: {
                id: 3,
                name: 'Mahaz Abbasi',
                bio: 'Web Developer'
            },
            comments: [
                {
                    author: {
                        id: 4,
                        name: 'Amir',
                        bio: 'Developer'
                    },
                    content: 'It is Great..!',
                    timestamp: new Date(),
                },
                {
                    author: {
                        id: 5,
                        name: 'Shazil',
                        bio: 'Web Developer'
                    },
                    content: 'Amazing..!',
                    timestamp: new Date(),
                },
                {
                    author: {
                        id: 6,
                        name: 'Naveed',
                        bio: 'Full Stack Developer'
                    },
                    content: 'Stunning..!',
                    timestamp: new Date(),
                },
            ]
        }
    ];

posts.sort((a,b) => b.comments.length - a.comments.length);
function sortPost() {
    for(let post of posts){
        console.log(chalk.yellowBright(post.title))
    }
}

console.log(chalk.bold.blueBright('****************************************'))
console.log(chalk.bold.blueBright('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'))
console.log(chalk.bold.blueBright('****************************************'))
sortPost()
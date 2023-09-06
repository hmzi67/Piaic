import chalk from "chalk";
let user = [
    {
        id: 1,
        username: 'Hmzi'
    },
    {
        id: 1,
        username: 'Saif'
    },
    {
        id: 1,
        username: 'jamal'
    },
];
let posts = [
    {
        id: 1,
        title: 'Sunset',
        username: user[0].username,
    },
    {
        id: 2,
        title: 'Natural Beauty',
        username: user[1].username,
    },
    {
        id: 3,
        title: 'Fashion',
        username: user[2].username,
    },
];
let profile = {
    id: 1,
    username: user[0],
    bio: 'Software Developer',
    posts: [posts[0], posts[1], posts[2]],
};
let like = [
    {
        id: 1,
        user: [user[0].username, user[1].username],
        content: posts[0],
        timestamp: new Date(),
    },
    {
        id: 2,
        user: [user[0].username, user[1].username, user[2].username],
        content: posts[1],
        timestamp: new Date(),
    },
    {
        id: 3,
        user: [user[1].username],
        content: posts[2],
        timestamp: new Date(),
    },
];
like.sort((a, b) => b.user.length - a.user.length);
function mostLikedPost() {
    console.log(chalk.bold.bgYellowBright.blackBright(` Most liked post is "${like[0].content.title}", and this post is liked by "${like[0].user}" `));
    console.log(chalk.italic.blueBright(`This post is posted by ${like[0].content.username}`));
}
export { mostLikedPost };

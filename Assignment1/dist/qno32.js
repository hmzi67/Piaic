"use strict";
function checkUserNames(current_user, new_user) {
    const currentUsersLower = current_user.map(user => user.toLowerCase());
    for (let newUser of new_user) {
        const newUserLower = newUser.toLowerCase();
        if (currentUsersLower.includes(newUserLower)) {
            console.log(`Sorry ${newUser} is already taken. Please try another one`);
        }
        else {
            console.log(`The username ${newUser} is available`);
        }
    }
}
let current_user = ['hmzi67', 'awais12', 'jamal12', 'saif12', 'Anas'];
let new_user = ['hMzi67', 'awais12', 'mahaz12', 'amir12', 'shazil12'];
checkUserNames(current_user, new_user);

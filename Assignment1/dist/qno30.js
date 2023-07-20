"use strict";
let userNameArr = ["Hmzi67", "code_hunts", "admin", "Jamal", "Owais"];
for (let userName in userNameArr) {
    if (userNameArr[userName] == 'admin') {
        console.log("Hello admin, would you like to see a status report");
    }
    else {
        console.log(`Hello ${userNameArr[userName]}, Thanks for logging in again!`);
    }
}

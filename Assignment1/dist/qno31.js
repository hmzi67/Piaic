"use strict";
let userNameArr1 = ["Hmzi67", "code_hunts", "admin", "Jamal", "Owais"];
userNameArr1.splice(0, 5);
if (Object.keys(userNameArr1).length === 0) {
    console.log("We need to find some users!");
}

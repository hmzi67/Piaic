"use strict";
// Name     :   Hamza Waheed Abbasi
//Roll no   :   PIAIC215406
//Batch     :   48
//City      :   Islamabad
//Email     :   hamzawaheed057@gmail.com
Object.defineProperty(exports, "__esModule", { value: true });
// Difference b/w callback and promises.
// ____________________________________________________________________________________________________
/*
Call backs:
    Syntax:
        Callbacks are functions that are passed as arguments to other functions and are executed once the asynchronous operation is complete.

    Readability:
        Callbacks can lead to callback hell or pyramid of doom when dealing with multiple asynchronous operations, making the code less readable and maintainable.
        
    Error Handling:
        Error handling in callback-based code can be challenging as errors need to be passed as separate callback arguments.
*/
console.log("");
console.log("Following will be the output of callback functions");
function born(cb) {
    cb("I'm born now...");
}
function childhood(cb) {
    cb("Now I'm 3 year old");
}
function jwani(cb) {
    cb("Now I'm Jawaan");
}
function bhurhapa(cb) {
    cb("Now I'm Bhudda");
}
function death(cb) {
    cb("Now I'm dead");
}
born((t) => {
    console.log(t);
    childhood((t) => {
        console.log(t);
        jwani((t) => {
            console.log(t);
            bhurhapa((t) => {
                console.log(t);
                death((t) => {
                    console.log(t);
                });
            });
        });
    });
});
/*
Promises:
    Syntax:
        Promises provide a more structured way to handle asynchronous operations. They represent a value that may be available now, or in the future, or never. Promises have methods like then and catch to handle success and error cases.

    Readability:
        Promises offer a more linear and readable code structure, especially when chaining multiple asynchronous operations using .then().

    Error Handling:
        Error handling is cleaner with Promises using the .catch() method, which makes it easier to manage errors in asynchronous code.
*/
console.log("");
console.log("Following will be the output of Promises");
function carMaintenance(num) {
    console.log("Leave car at workshop");
    console.log("Do Grocery....");
    let result = new Promise((resolve, reject) => {
        if (num > 3) {
            console.log("Car is fixed");
            resolve("Your car is ready...");
        }
        else {
            reject("Car is not ready");
        }
    });
    return result;
}
function pickDress(num) {
    let result = new Promise((resolve, reject) => {
        if (num > 3) {
            console.log("dress is ironed");
            resolve("Your dress is ready...");
        }
        else {
            reject("dress is not ready");
        }
    });
    return result;
}
function attendEvent(num) {
    let result = new Promise((resolve, reject) => {
        if (num > 3) {
            resolve("Attend event...");
        }
        else {
            reject("event is not ended");
        }
    });
    return result;
}
let machanicResponce = carMaintenance(4);
machanicResponce
    .then((t) => {
    console.log("machinic responce...", t);
    return pickDress(5);
})
    .then((t) => {
    console.log("laundry responce...", t);
    return attendEvent(5);
})
    .then((t) => {
    console.log("now ", t);
})
    .catch((err) => {
    console.log("error", err);
});

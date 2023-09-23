"use strict";
function carMaintenance(num) {
    console.log("Leave car at workshop");
    console.log("Do Grocery....");
    let result = new Promise((resolve, reject) => {
        if (num > 3) {
            setTimeout(() => {
                console.log("Car is fixed");
                resolve("Your car is ready...");
            }, 3000);
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
            setTimeout(() => {
                console.log("dress is ironed");
                resolve("Your dress is ready...");
            }, 3000);
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
            setTimeout(() => {
                resolve("Attend event...");
            }, 3000);
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

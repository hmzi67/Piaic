// Name     :   Hamza Waheed Abbasi
//Roll no   :   PIAIC215406
//Batch     :   48
//City      :   Islamabad
//Email     :   hamzawaheed057@gmail.com

function carMaintenance(num: number) {
  console.log("Leave car at workshop");
  console.log("Do Grocery....");
  let result: Promise<string> = new Promise((resolve, reject) => {
    if (num > 3) {
      setTimeout(() => {
        console.log("Car is fixed");
        resolve("Your car is ready...");
      }, 3000);
    } else {
      reject("Car is not ready");
    }
  });
  return result;
}

function pickDress(num: number) {
  let result: Promise<string> = new Promise((resolve, reject) => {
    if (num > 3) {
      setTimeout(() => {
        console.log("dress is ironed");
        resolve("Your dress is ready...");
      }, 3000);
    } else {
      reject("dress is not ready");
    }
  });
  return result;
}

function attendEvent(num: number) {
  let result: Promise<string> = new Promise((resolve, reject) => {
    if (num > 3) {
      setTimeout(() => {
        resolve("Attend event...");
      }, 3000);
    } else {
      reject("event is not ended");
    }
  });
  return result;
}

let machanicResponce = carMaintenance(4);
machanicResponce
  .then((t: string) => {
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
  .catch((err: any) => {
    console.log("error", err);
  });


// Difference b/w callback and promises.

/* 
Call backs:
    Syntax: 
        Callbacks are functions that are passed as arguments to other functions and are executed once the asynchronous operation is complete.

    Readability: 
        Callbacks can lead to callback hell or pyramid of doom when dealing with multiple asynchronous operations, making the code less readable and maintainable.
        
    Error Handling: 
        Error handling in callback-based code can be challenging as errors need to be passed as separate callback arguments.
*/

/*
Promises:
    Syntax: 
        Promises provide a more structured way to handle asynchronous operations. They represent a value that may be available now, or in the future, or never. Promises have methods like then and catch to handle success and error cases.

    Readability: 
        Promises offer a more linear and readable code structure, especially when chaining multiple asynchronous operations using .then().

    Error Handling: 
        Error handling is cleaner with Promises using the .catch() method, which makes it easier to manage errors in asynchronous code. 
*/


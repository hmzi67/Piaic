"use strict";
// ------------------------ push() ------------------------------------
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); //output [1, 2, 3, 4]
// ------------------------ pop() ------------------------------------
arr.pop();
console.log(arr); //output [1, 2, 3]
// ------------------------ shift() ------------------------------------
arr.shift();
console.log(arr); //output [2, 3]
// ------------------------ unshift() ------------------------------------
arr.unshift(3, 2);
console.log(arr); //output [3, 2, 2, 3]
// ------------------------ concat() ------------------------------------
let arr2 = [4, 5];
arr = arr.concat(arr2);
console.log(arr); //output [3, 2, 2, 3, 4, 5]
// ------------------------ join() ------------------------------------
let arr3 = [6, 9, 7];
let arr4 = arr3.join("-");
console.log(arr4); //output 6-9-7
// ------------------------ slice() ------------------------------------
let arr5 = arr.slice(2, 5);
console.log(arr5); //output [2, 3, 4]
// ------------------------ indexOf() ------------------------------------
let arr6 = arr.indexOf(4);
console.log(arr6); //output 4
// ------------------------ lastIndexOf() ------------------------------------
let arr7 = arr.lastIndexOf(3);
console.log(arr7); //output 3
// ------------------------ includes() ------------------------------------
console.log(arr.includes(2)); //output true
// ------------------------ find() ------------------------------------
let arr8 = [8, 9, 6, 5];
let arr9 = arr8.find((n) => {
    return n % 2 === 0;
});
console.log(arr9); //output 8
// ------------------------ findIndex() ------------------------------------
let arr10 = arr8.findIndex((n) => {
    return n % 2 === 0;
});
console.log(arr10); //output 0
// ------------------------ map() ------------------------------------
let arr11 = arr8.map((n) => {
    return n + 1;
});
console.log(arr11); //output [9, 10, 7, 6]
// ------------------------ filter() ------------------------------------
let arr12 = arr8.filter((n) => {
    return n % 2 === 0;
});
console.log(arr12); //output [8, 6]
// ------------------------ reduce() ------------------------------------
let arr13 = arr8.reduce((prev, acc) => {
    return prev + acc;
});
console.log(arr13); //output 28
// ------------------------ every() ------------------------------------
let arr14 = arr8.every((i) => {
    return i % 2 === 1;
});
console.log(arr14); //output false
// ------------------------ some() ------------------------------------
let arr15 = arr8.some((i) => {
    return i % 2 === 1;
});
console.log(arr15); //true
// ------------------------ reverse() ------------------------------------
let arr16 = [1, 2, 3, 4, 5];
console.log(arr16.reverse()); //output [5, 4, 3, 2, 1]
// ------------------------ at() ------------------------------------
// at is not available in typescript
// ------------------------ sort() ------------------------------------
let arr17 = ['10', '9', '11', '300', '5000'];
let n = arr17.sort(function (a, b) {
    return a - b;
});
console.log(n);

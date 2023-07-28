"use strict";
function make_shirt1(sizeOfShrit1, default_MessageOnShirt) {
    for (let x of sizeOfShrit1) {
        if (x == "Medium") {
            console.log(`Size of shirt is ${sizeOfShrit1[0]}. Print this message "${default_MessageOnShirt[1]}" `);
        }
        else if (x == "Large") {
            console.log(`Size of shirt is ${sizeOfShrit1[1]}. Print this message "${default_MessageOnShirt[1]}" `);
        }
        else if (x == "any") {
            console.log(`Size of shirt is ${sizeOfShrit1[2]}. Print this message "${default_MessageOnShirt[0]}" `);
        }
    }
}
let sizeOfShrit1 = ["Medium", "Large", "any"];
let default_MessageOnShirt = ["Code HUNT'S CEO", "I love TypeScript",];
make_shirt1(sizeOfShrit1, default_MessageOnShirt);

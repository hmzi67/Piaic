"use strict";
const magicianList2 = ['siddique', 'asadullah', 'sehrish', 'bushra', 'asim'];
function show_magician2(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great_magician1(magicianList1) {
    let greatMagicians = [];
    for (const magician of magicianList1) {
        const greatMagician = magician + ' the Great';
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
const greatMagicians1 = make_great_magician1(magicianList2);
console.log("ORIGNAL MAGICIAN");
console.log(magicianList2);
show_magician2(magicianList2);
console.log("\n");
console.log("GREAT MAGICIAN");
console.log(greatMagicians1);
show_magician2(greatMagicians1);
console.log("\n");
console.log("orignal Array");
show_magician2(magicianList2);

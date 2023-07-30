"use strict";
const magicianList1 = ['siddique', 'asadullah', 'sehrish', 'bushra', 'asim'];
function show_magician1(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great_magician(magicianList1) {
    let greatMagicians = [];
    for (const magician of magicianList1) {
        const greatMagician = magician + ' the Great';
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
const greatMagicians = make_great_magician(magicianList1);
console.log("ORIGNAL MAGICIAN");
console.log(magicianList1);
show_magician1(magicianList1);
console.log("\n");
console.log("GREAT MAGICIAN");
console.log(greatMagicians);
show_magician1(greatMagicians);

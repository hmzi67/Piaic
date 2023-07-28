"use strict";
function make_album(name, title, track) {
    const album = {
        name: name,
        title: title
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
const album1 = make_album('Hamza', "Code Hunt's");
console.log(album1);
const album2 = make_album('Shazil', "Code Hunt's");
console.log(album2);
const album3 = make_album('Naveed', "Code Hunt's");
console.log(album3);
const album4 = make_album('Usama', "Code Hunt's", 8);
console.log(album4);

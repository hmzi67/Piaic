interface Album{
    name:string;
    title:string;
    track?:number;
}

function make_album(name:string, title:string, track?: number): Album{
    const album: Album = {
        name:name,
        title:title
    };
    if( track !== undefined){
        album.track = track;
    }
    return album
}
const album1:Album = make_album('Hamza', "Code Hunt's")
console.log(album1)
const album2:Album = make_album('Shazil', "Code Hunt's")
console.log(album2)
const album3:Album = make_album('Naveed', "Code Hunt's")
console.log(album3)

const album4:Album = make_album('Usama', "Code Hunt's", 8)
console.log(album4)
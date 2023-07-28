const magicianList:string[] = ['siddique', 'asadullah', 'sehrish', 'bushra', 'asim']

function show_magician(magicians:string[]): void{

    console.log(magicianList)
    for (const magician of magicians){
        console.log(magician)

    }
}

show_magician(magicianList)
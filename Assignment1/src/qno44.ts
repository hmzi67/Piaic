let items = []
function make_sandwich(...items:string[]){
    console.log("i'll make a great sandwich")
    for(let item in items){
        console.log(`...adding ${items[item]} to your sandwich`)
    }
    console.log("your sandwich is ready")
}

make_sandwich('Chicken Breast', 'Bacon', 'Lettuce')
make_sandwich('BREAD', 'MAYONNAISE', 'TOMATO')
make_sandwich('Chicken', 'MAYONNAISE', 'BACON')
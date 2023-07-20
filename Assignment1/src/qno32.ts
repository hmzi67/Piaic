let current_user = ['hmzi67','awais12','jamal12','saif12','Anas']
let new_user = ['hmzi67','awais12','mahaz12','amir12','shazil12']

for (let newUser in new_user){
    if(newUser in current_user){
        console.log(`sorry ${new_user[newUser]} is already taken`)
    }
    else{
        console.log(`USER NAME  IS available`)
    }
}

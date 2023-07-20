let ageOfPerson = 20;

if(ageOfPerson < 2){
    console.log("Person is baby")
}else if (ageOfPerson == 2 || ageOfPerson < 4){
    console.log("Person is toddler");
}
else if (ageOfPerson == 4 || ageOfPerson < 13){
    console.log("Person is kid");
}
else if (ageOfPerson == 13 || ageOfPerson < 20){
    console.log("Person is teenager");
}
else if (ageOfPerson == 20 || ageOfPerson < 65){
    console.log("Person is adult");
}
else if (ageOfPerson >= 65 ){
    console.log("Person is elder");
}else{
    console.log("You enter wrong input")
}

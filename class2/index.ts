//explicitly assigning value
let myName:string = "Hamza Waheed";

if(true){
    let myAge = 22
    const myCity = "Islamabad"
    var hight = 5.4
 }
 
 //typescript automatically infer the data type
let age = 21;
console.log(hight)


//Datatypes
//String number boolean undefined null 
let nullValue = null;     //value will be null
let unAssigned;   //undefined
let str = "String " //String
let bool = true;  //boolean
let num = 64;   //number

let line = `All rights 
reserved. 
${myName} is my name`

console.log(line)
console.log(typeof(line))


//Operators

// + - * /

// ** -> exponention
// Assignment Operator
// +=  -= *= /= 
 let num1 = 20;
 let num2 = 10;

num2 += 6; //assignment operator
console.log(num2)

//comparison operator
// == === != <= >= 

//if we compare two number in JS "==" JS will not check the datatype but typescript will check data types
//=== JS will check datatypes
//let num1 = '20';
//let num2 = 10;
//console.log(num1 == num2)

//Logical Operators
//&& || !
//not 
console.log(!(num1>30))
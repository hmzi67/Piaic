let str1 = "Hamza"
let str2 = "Hamza"
console.log(str1 == str2 )
console.log(str1 != str2 )

let lowerCase = str1.toLowerCase == str2.toLowerCase
console.log(lowerCase)
lowerCase = str1.toLowerCase != str2.toLowerCase
console.log(lowerCase)

let number24 =  52;
let number25 = 25;

//equality and inequality
console.log(number24 == number25)
console.log(52==52)
console.log(number24!=number25)
console.log(52 != 52)

//less than and greater than...
console.log (5>4)
console.log (5>9)
console.log (5<4)
console.log (5<44)
console.log (5 <= 44)
console.log (5 <= 4)
console.log (5 >= 4)
console.log (5 >= 14)

//and and or operator

console.log(number24<number25 && number25<number24)
console.log(number24>number25 && number25<number24)
console.log(number24<number25 || number25<number24)
console.log(number24<number25 || number25<number24)

//test weather the item is in array
let arr = [25, 56, 25, 56, 12]
console.log(arr.includes(25))

//item is not in an array
console.log(arr.includes(31))

//let's invite some guestes 

let guests16 = ['Saifullah Baig', 'Jamal Wajid', 'Mahaz-ul-haq Abbasi']

console.log(guests16[0], 'please come to dinner')
console.log(guests16[1], 'please come to dinner')
console.log(guests16[2], 'please come to dinner')

console.log('Sorry', guests16[2], "can't make to dinner")

// guests.pop();

guests16.splice(2,1)

guests16.push('Awais Yameen') 

console.log(guests16[0], 'please come to dinner')
console.log(guests16[1], 'please come to dinner')
console.log(guests16[2], 'please come to dinner')

console.log('\n')

console.log("Now we hava a bigger dinning table")

guests16.unshift("AAmir Husain")
guests16.splice(2, 0, 'Anas Tufail')
guests16.push('Muzammil')

console.log(guests16[0]+ ', please come to dinner ')
console.log(guests16[1]+ ', please come to dinner ')
console.log(guests16[2]+ ', please come to dinner ')
console.log(guests16[3]+ ', please come to dinner ')
console.log(guests16[4]+ ', please come to dinner ')
console.log(guests16[5]+ ', please come to dinner ')


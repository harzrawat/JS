//  Reliable concatenation syntax apart from direct + method

const name1 = "Harsh"
const num_book = 5

console.log(`${name1} has ${num_book} books`);

// declare string method 2
const my_name = new String('Harsh')

console.log(name1.split(''))   // [ 'H', 'a', 'r', 's', 'h' ]
console.log(name1.__proto__)  // did not get this)

console.log(name1.charAt(2))     // r
console.log(name1.indexOf('r'))     // 2

console.log(name1.substring(0,4))
console.log(name1.slice(-3))   // gives last 3 chars
console.log(name1.slice(-3, -1))   // always traverse from left to right whether in +ve or -ve slicing

// removing outer white spaces of a string
const a = "    hey,there,you "
console.log(a.trim())

// replacing
console.log(a.replace(',','-'))     // replace 1st occurence of that char



// In JavaScript, the const keyword is used to declare a constant reference to a value. However, this does not mean that the value itself is immutable. Instead, it means that the reference to the value cannot be changed.


const myarray = [3,6,1,'f']

console.log(myarray)        // [ 3, 6, 1, 'f' ]

myarray.push(2)
console.log(myarray)        // [ 3, 6, 1, 'f', 2 ]

myarray.unshift(7)
console.log(myarray)        // [ 7, 3, 6, 1, 'f', 2 ]

myarray.shift(7)
console.log(myarray)        // [ 3, 6, 1, 'f', 2 ]

// questionnaire fucntions
console.log(myarray.includes(23))       // false
console.log(myarray.indexOf(15))        // if not exists , gives -1

// array to string
const newarray = myarray.join('')       // by default attribute is ',', hence includes commas also if nothing specified
console.log(newarray)       // "361f2"


const arr1 = myarray.slice(1,3)
console.log(arr1,myarray)       // [ 6, 1 ] [ 3, 6, 1, 'f', 2 ]
const arr2 = myarray.splice(1,3)  // splice includes limit value and deletes extracted values from original table 
console.log(arr2,myarray)       // [ 6, 1, 'f' ] [ 3, 2 ]

// joining lists

const urarray = ['a','b','t','you']
const arr3 = myarray.concat(urarray)
console.log(arr3)

const arr4 = [...myarray, ...urarray]   // this way one can merge more than 1 arrays
console.log(arr4)

// array from string
console.log(Array.isArray('Harsh'))     // false

console.log(Array.from('Harsh'))    // [ 'H', 'a', 'r', 's', 'h' ]
console.log(Array.of('Harsh','Rohit','Vidhi'))  // [ 'Harsh', 'Rohit', 'Vidhi' ]

const nested_array = [1,2,[3,4,[5,6,7],3],12]
console.log(nested_array.flat(Infinity))






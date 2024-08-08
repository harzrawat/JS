// 7 primitive datatypes : String, Number, Bigint, null, undefined, boolean, Symbol

// Reference datatypes ( non-primitive ) : Array, objects, Functions


console.log(typeof undefined);  // undefined
console.log(typeof null);    // object

let score = 33
// const {score} = req.body  // method to retrieve value from frontend, will not work here
console.log(typeof score)  // number
console.log(typeof(score))  // number

let score1 = "hey"  // => NaN
let score2 = null   // => 0
let score3 = true   // => 1
let score4 = false  // => 0
let value_in_num1 = Number(score1)
let value_in_num2 = Number(score2)
let value_in_num3 = Number(score3)
let value_in_num4 = Number(score4)

console.log(typeof value_in_num1, typeof value_in_num2, typeof value_in_num3, typeof value_in_num4)  // number number
console.log(value_in_num1, value_in_num2, value_in_num3, value_in_num4)  // NaN 0 1 0

// similarly for boolean conversion

let a = "str"
let value_in_bool = Boolean(a)
console.log(value_in_bool)  

// here 1 => true, 0 => false, null => false, "" => false, ELSE true










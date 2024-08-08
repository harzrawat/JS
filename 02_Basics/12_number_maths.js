const a = 33
const b = new Number(45.24362)
const c = 1234.34875412008

console.log(a,b)    // 33 [Number: 45]

console.log(a.toString().length)    // 2  // convert into str and them calc length
console.log(a.toFixed(2))   // 45.00

console.log(b.toPrecision(3))   // 45.2
console.log(c.toPrecision(3))   // 1.23e+3 ( means 1.23 x 10**3)

const area = 3287263
console.log(area.toLocaleString())  // 32,87,263
console.log(area.toLocaleString('en-US'))   // 3,287,263

// =============================== Maths ============================================

console.log(Math.abs(-4))   // 4
console.log(Math.round(3.52))   // 4
console.log(Math.ceil(3.12))    // 4
console.log(Math.floor(3.78))   // 3
console.log(Math.min(7,3,6,0,1))    // 0

console.log(Math.random())  // any number between 0 & 1, 0 inclusive , 1 excluded
console.log(Math.floor((Math.random()*10)+1))   // any integer between 1 to 10 both inclusive




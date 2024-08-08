// Global scope and block scope

if(true){
    let a = 10
    const b = 20
    var c = 30  // only c will be defined outside of the loop
}

// console.log(a)  // not defined, gives error
// console.log(b)  // not defined, gives error
console.log(c)  // gives output without any error

// ========================#===================#===============================

var d = 300
if(true){
    d = 30  // or var d = 30
}

console.log(d)  // will get latest value regardless of inside or outside the loop




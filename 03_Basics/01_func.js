// direct defined func can be accessed if executed before the written function

console.log(func1(1,2,3,4,5,6))


function func1(num1, num2, ...num3){
    // return [num1,num2,num3]      // [ 1, 2, [ 3, 4, 5, 6 ] ]

    return `num1:${num1} num2:${num2} num3:${num3}` 
    // num1:1 num2:2 num3:3,4,5,6
}

// console.log(func1(1,2,3,4,5,6))



// ========= expression ( is basically a function only) ==============
 
// console.log(addtwo(3))      // gives error

const addtwo = function(num){
    return num + 1
}

console.log(addtwo(3)) // gives 4

const add2 = (num) => `sum is ${num+2}`

console.log(add2(3)) // gives 4


const obj1 = {
    username:"Harsh",
    student:"Yes",
    wel_message: function() {
        console.log(`Welcome ${this.username}`)
    }
}

obj1.wel_message() // welcome Harsh
obj1.username = "Rohit"
obj1.wel_message() // welcome Rohit

// Arrow function notation

const func1 = (num1,num2) => {
    return num1+num2
}

console.log(func1(1,2)) // 3

// =================================================

// const func2 = (num1,num2) => num1+num2   // this is also correct
const func2 = (num1,num2) => (num1+num2)    // single line direct return can be written like this also
console.log(func2(1,2)) // 3

const func3 = (num1,num2) => ({Harsh:num1,Rohit:num2})  // it return by default without actually writing return
console.log(func2(11,22)) // 33

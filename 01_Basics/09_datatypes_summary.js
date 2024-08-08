// 7 primitive datatypes : String, Number, Bigint, null, undefined, boolean, Symbol

const id = Symbol('123');
const another_id = '123'

console.log(id==another_id);        // false

const bignumber = 87265873456927482356n;  // n following makes this bigint
console.log(bignumber)
console.log(typeof bignumber)       // bigint


// Reference datatypes ( non-primitive ) : Array, objects, Functions

const myfunction = function() {
    console.log("hello world")
}

// =====================================================#===========================#=============#========#=====#===#==#=#=

/*
Memory : 
Stack ( primitive ) -- get copy , Heap ( non-primitive ) -- get reference
*/

let a = "Harsh"
let b=a
b="Rohit"

console.log(a,b)  // Harsh Rohit
// a doesn't change bcz b gets its copy not original ref

let obj1 = {name:"Harsh", rank:9}
let obj2 = obj1

obj2.name = "Rohit"

console.log(obj1.name, obj2.name)  // name attribute for both objects changes as both get the value form same reference from the heap 

 

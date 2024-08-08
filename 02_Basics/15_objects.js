// singleton
// object.create

// object literals

const mysym = Symbol("key3")

const jsuser = {
    name:'Harsh',
    "full name":'Harsh Rawat',
    [mysym]:"mykey3"        // symbol as a key can't be directly written

}

console.log(jsuser.name)    // here we can access the key by dot notation as the key is non-quoted
console.log(jsuser['full name'])    // this way all can be accessed
console.log(jsuser[mysym])

// function as a key & this attribute
jsuser.greeting = function(){
    console.log(`Hello JS users ${this.name}`)
}

console.log(jsuser.greeting)    // [Function (anonymous)]
console.log(jsuser.greeting())      // Hello JS users Harsh

// freezing of dict
jsuser.email = "hr@gmail.com"
Object.freeze(jsuser)       // restricts any changes
jsuser.email = "mail"
console.log(jsuser)

// merging more than 1 obbjects into a new one
const obj1 = {a:1,b:2}
const obj2 = {c:3,"d":4}
const obj3 = {e:5,"f":6}

let obj4 = {obj1, obj2}     // { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }
let obj5 = Object.assign({}, obj1, obj2, obj3)      // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
let obj6 = {...obj1,...obj2,...obj3}      // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
console.log(obj4)
console.log(obj5)
console.log(obj6)

// methods of Object class apart from freeze & assign
// Object.keys(obj_name)
// Object.values(obj_name)
console.log(Object.entries(obj1))   // [ [ 'a', 1 ], [ 'b', 2 ] ]   # both key value pairs in nested list

console.log(obj1.hasOwnProperty('isLoggedIn'))  //   false
console.log(obj1.hasOwnProperty('a'))       // True , checks the key presence

// retrieving value of a key without typical dot or bracket notation

const {a} = obj1
console.log(a)  // 1 , gives the value for that key

const {a: key1} = obj1  // alias name type
console.log(key1)   // 1





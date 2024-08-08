// for
// forof
// forin
// foreach
// filter
// reduce
// map

// =========== for ================

for(let i=0; i<=5; i++){    // be careful semicolon is used here
    if(i==3){
        console.log("detected");
        break; // stops the loop 
        // continue; skips current step after it and jump to next turn in for loop
    }
    console.log(i)
}

// ============= forof =================================

// for (const iterator of object) {
    
// }

const arr1 = [34,12,76,45,1,7,45]

for(val of arr1){
    console.log(val)
}

for(const val of arr1) console.log(val);  // this and above are same 

// const obj1 = {a:2,b:6}
// for (const key of obj1) {        // forof not work for JS objects
//     console.log(key)
// }

const map1 = new Map()
// map1.name = "Harsh"    // this way though accepts value similar to objects but can't be iterated through forof
// map1.class = 27
map1.set("School","VG")      // desired way to assign the key values
map1.set("Name","Harsh")

// console.log(map1);          // Map(2) { 'School' => 'VG', 'Name' => 'Harsh' }

for (i of map1) {     // in case of map the iterated item is a list of key and value each time
    console.log(i)
}

for ([key,value] of map1) {
    console.log(key)
}

// ===================== forin =================================
// for in access the key for object or array
const arr2 = [1,2,3]

for(let a in arr2){        // forin used in array iteration iterates array's index or to say keys of array in JS
    console.log(a)
}

let obj2 = {"a":23,b:32}
for(let a in obj2) console.log(a);  // gives only keys of obj2

// console.log(map1);

for(a in map1) console.log(a)       // gives nothing, does not work

// ============================= foreach ===============================================
// array.forEach(element => {
    // used to traverse the elements directly from array
// });

// console.log(arr1)


arr1.forEach((item, index, arr) => console.log(`item: ${item}, index: ${index}, array: ${arr}`));

// with object inside array

const obj3 = [
    {
    Name: "Harsh",
    Height: 176
    },
    {
    Name: "Rohit",
    Height: 178
    }
]

obj3.forEach(item => console.log(item.Name));

const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    console.log(item);
} )

 
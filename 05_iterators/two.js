//filter 
// reduce
// map

// ================== filter ============================

const arr1 = [10,20,54,9,17]

let nums = arr1.filter((num) => num<20)
console.log(nums)

// writing for loop for filter

let newarr = new Array()  // here outer let can be accessed by inner but not inner declared let
for ( let i of arr1){
    // let newarr = new Array()  // if this is also declared then outer newarr will be printed
    if(i<20){
        newarr.push(i)
    }
}

console.log(newarr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let bookslst = books.filter( (item) => item.genre=="Fiction")
console.log(bookslst)

let bookslst2 = books.filter( (item) => {
    return item.genre=="Fiction" && item.edition>2005

});
console.log(bookslst2)

// ================== map ==============================
// to perform calculation on am array without actually writing traversal code 

let arr3 = [1,2,3,4,5,6,]

const newarr2 = arr3.map( (item) => item*10 )
console.log(newarr2);       // [ 10, 20, 30, 40, 50, 60 ]

const newarr3 = arr3.map( (item) => item*10 ).filter((item) => item>=40)
console.log(newarr3);

// ===============================  reduce ===============================

// to sum up the array items

const initialvalue = 0
let sum1 = arr3.reduce(function(accumulator,curentvalue) {
    return accumulator+curentvalue
},initialvalue)
console.log(sum1);

let sum2 = arr3.reduce((acc,cur) => acc+cur, initialvalue)
console.log(sum2);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
// converted automatically in int

console.log("2">1); // true
console.log("02">1);    // true

console.log("1"> 2);   // flase
console.log("1"==1)     // true

console.log(null==0);   // false  // equality check is diff from comparison as it doesnot convert null into zero
console.log(null>=0);   // true, bcz converts null into zero
console.log(null>0); // false
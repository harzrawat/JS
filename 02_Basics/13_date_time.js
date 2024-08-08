const mydate = new Date()
console.log(mydate.toString())  // Tue Jul 23 2024 12:44:39 GMT+0530 (India Standard Time)
console.log(mydate.toDateString())  //Tue Jul 23 2024
console.log(mydate.toJSON())    // 2024-07-23T07:14:39.582Z
console.log(mydate.toTimeString())    // 12:44:39 GMT+0530 (India Standard Time)

console.log(mydate.toLocaleTimeString('en-UK', { timeZone: 'Greenwich' })); // 07:20:02

// create cutomised date

const mycreatedate = new Date(2023, 0, 23)  // months starts from 0 in js
console.log(mycreatedate.toDateString())    //Mon Jan 23 2023

const my_cr_dt = new Date('2024-07-23')
console.log(my_cr_dt.toDateString())        // Thu Jan 19 2023

// time stamp

let mytimestamp = Date.now()
console.log(mytimestamp)       // 1721719560806 a value like this is milliseconds calc from the reference time   
console.log(my_cr_dt.getTime()) // time of this date from ref date

console.log(Math.floor(Date.now()/1000))    // in seconds

console.log(mydate.getMonth()+1)
console.log(mydate.getDay())

console.log(mydate.toLocaleDateString('default', {
    weekday: "long",
}))     // thus various attributes for this function


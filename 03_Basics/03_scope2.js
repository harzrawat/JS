function myf(){
    const a = 2
    function myf2(){
        const b = 3
        console.log(a)
    }

    // console.log(b)       // not defined in outer block scope
    myf2() // prints 2
}

myf()  // calls inner func and prints 2

// ============#=============================#========================

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);    // this works
    }
    // console.log(website);   // error bcz can't access inner const
}

// console.log(username);  // gives error, can't access inner const


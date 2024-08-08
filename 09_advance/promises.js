/* A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. */

// const promise1 = new Promise()  // promise is also an object

// it has basically 2 parts: creating and consuming promises
// promises reducec call back Hell : But How ?

// promise format
const promise2 = new Promise(function(resolve,reject){
    // Here we do async task
    // DB calls, cryptography, netweork
    setTimeout(()=>{
        console.log("Async task is completed 1");
    },1000)
    
})  // running script for this promise object gives the the output of console.log without explicitly calling the function bcz When you create a new Promise, the function you pass to it (often called the executor function) is executed immediately. ... as you can recall that setTimeout always runs without explicit execution

// consuming promises this way
// promise2.then()     // it is associated with resolve

promise2.then(function(){
    console.log("Async task achieved2");
})      // will not work this way, WHY?, bcz " then " is not connected with resolve

// then and resolve have to be conneted for that
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed3");
    },1000)
    resolve() 
})
promise3.then(function(){
    console.log("then and resolve are connected 4");
})

// can also directly run this
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed5");
    },1000)
    resolve() 
}).then(function(){
    console.log("then and resolve are connected 6");    
})

// here I observe that fucntion inside then scope is instantly executed and the task in setTimeout is executed after time delay speciied bcz resolve is specified out of time out, hence async 

const promise4 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username:"Harsh",email:"hr@gmail.com"})
    },1000)
})

promise4.then((user)=>{         // whatever is passed inside resolve is the input for this
    console.log(user);
})

// MUltiple .then statement

const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({username:"Harsh",password:"pass123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// const username1 = promise5
// .then((user)=>{
//     console.log(user);
//     return user.username
// })

// console.log(username1);    // throws error because .catch is not mentioned to handle reject

promise5
.then((user)=>{
    console.log(user);
    return user.username
})                          // output of above then is input for lower then
.then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))

// console.log(username2);    // if executed explicitly by this, then promise will be in pending state as console prints the thing before setTimeout specified time

const promise6= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


/* async function consumePromise(){
    const response = await promise6
    console.log(response);
}
consumePromise()  */       // this will only run if reject is not called

// hence have to handle reject also
async function consumePromise6(){
    try{
        const response = await promise6
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromise6()

// ===================== Using fetch ========================
async function fetch_func(){
    try {
        const response =  await fetch("https://api.github.com/users/harzrawat")
        // console.log(response);
        console.log("type:",typeof response);
        const data = await response.json()      // response.json() returns a Promise.

              // await waits for the Promise to resolve and assigns the resolved value (the parsed JSON object) to data.
        console.log(Object.keys(data));
    } catch (error) {
        console.log("E:",error);
    }
}

fetch_func()

// ================ Another way for API fetching

fetch("https://api.github.com/users/harzrawat").then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log("These are keys:",Object.keys(data));
}).catch((error)=>{
    return error
})
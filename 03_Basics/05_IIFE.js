// IIFE : Immediately Invoked Function Expression 
// :- prevents from global scope pollution & execute when making

(function func1(){
    console.log("IIFE executed")
})();    // IIFE executed
// IMP :  have to use semicolon urself to stop the scope of the function

( () => {
    console.log("IIFE executed")
} )();    // IIFE executed


( (name) => {
    console.log(`IIFE executed by ${name}`)
} )('Harsh');   // IIFE executed by Harsh
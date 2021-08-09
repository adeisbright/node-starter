/***
 * The timer module exposes a global API for scheduling functions to be called at some future period 
 * of time. Because the timer functions are globals , there is no need to call require("timers") 
 * to use the API
 */ 
let printName = (name) => console.log(name) 

let foo = () => console.log("foo") 

// setTimeout is used to delay the execution of a function until after all code has being executed
setTimeout(() => {
    printName("Adeleke")
} , 0) 
setImmediate(() => {
   console.log("This will be invoked immediately")
} , 0)
foo()

let timerId = setInterval(() => {
    console.log("You are going too far in programming")
} , 50000) 

let date = new Date() 

if (date.getMinutes() > 23) {
    console.log(date.getMinutes())
    clearInterval(timerId) 
}
let recursive = () => {
    console.log("This is a recursive time out") 
    setTimeout(recursive , 1000) // A function being called in itself 
}
// Immediate is an object that is returned from setImmediate , Timeout is the object that is returned from setTimeout 
// What can timers in nodejs be used for ? Can they replace cron scheduler  

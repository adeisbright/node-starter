// Understanding Call Stack , Message Queue and Event Loop 
const bar = () => {
    try { 
        console.log("Hello , I am in the bar")
    }catch(error){
        console.log(error)
    }
    
} 

const baz = () => console.log("baz") 
const foo = () => {
    console.log("foo") 
    setTimeout(() => bar() , 0) //Callback 
    baz()
}
foo() 

// Promises 

// A Promise is an object representing the eventual completion or failure of an Asynchronous operation.
// You attach callbacks to the promise instead of passing a callbacks into functions.
/*

function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
createAudioFileAsync(audioSettings).then(successCallback, failureCallback); // using promises 
The callbacks can be chained to run more than onces on successive returned value.
The callbacks will never be called until the failure or completion of the asynchronous operation.
A then() returns a new promise. You can still then after catch especially if you want to run a new operation.
Error is propagated to to the catch not minding where it occured unlike for the callback method that you can use more 
than one error handler for every callback. 
All asynchronous operations will return a Promise. So , you literally may not have to create a promise 
 yourself.

Always return a result from a promise if it will be chained to another then.
A promise can be in the following state :
Fulfilled - Operation was completed 
Rejected - Operation failed 
Pending - Initial State= Neither fulfilled or completed 
*/
let fifteeen = Promise.resolve(15).then(val => { console.log(val)}) 

const sum = a => { 
    return new Promise(resolve => resolve(15).then(res => res + a))
}
sum(5).then(res => console.log(res)).catch(err => console.error(err)) 

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
  
  myPromise
    .then(res => {
        console.log(res) 
        return 27 //This value is available to the next then method 
    })
    .then(res => console.log(res)) 
    .catch(err => console.error(err)) 

//How to use Promise.all() - Takes an iterable of promise as input and returns a single promise that resolves to an 
// array of the results of the input promises.
// If one of the promise is rejected , it rejects immediately

let promise1 = new  Promise((resolve , reject) => resolve(2)) 
let promise2 = 4 
let promise3 =  new  Promise((r , f) => setTimeout(() => r(25) , 10) )

promise3.then(res => console.log(res)).catch(err => console.error(err)) 
Promise.all([promise1 , promise2 , promise3]).then(val => console.log(val)).catch(err => console.error(err))
console.log('Hello , World') //! To log anything to the debug console 
console.error('An error occurred') //! For sending error 
console.warn('What is happening') //! For sending warning 
console.info('An information') //! For giving info 
console.time('Start addition') 
const add = (...arg) => arg.reduce((a ,b) => a + b) 
const testAdd = console.log(add(2 , 2)) 
console.timeEnd('Start addition') 

console.table([0 , 2  , 3 , 4]) 
console.clear() //!To clear everything from the console 
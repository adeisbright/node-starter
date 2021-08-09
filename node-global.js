// Global objects are available in all modules.
// The following appear to be global but are not. They exist only in the scope of modules 
// == __filename , __dirname , exports , module , require() 
// Buffer is a global object used to handle binary data 
// __dirname returns the directory name of the current module  . It is the same as path.dirname(__filename) 
// __filname is the name of the current module 

let ModularProgram = require("./modular-programming")
let currentDirectory = __dirname 
let fileName = __filename  
console.log(`The directory is ${currentDirectory} while the file is ${fileName}`) 
console.log(`Your name is ${ModularProgram.name} and you are ${ModularProgram.age}`) 

// In node.js ecosystem , each file is treated as a seperate module
//You can bind the data to export from this module to exports.variable name

exports.name = "Adeleke Bright" 
exports.age = 26  
let gender = "Male" 
// By doing this  ,  the scope of exports is overriden and exports now refer to gender , name and age are not exported
module.exports = gender 
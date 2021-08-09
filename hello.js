const add = require("./add") //Using a module 

const sayHello = (name) => console.log(`Hello ${name}`) 
sayHello("Bunmi Tamilore")  

let students = ["John" , "Leke" ,"Suo" , "Ben"] 

students.map((student , i) => {
    console.log(`${student} is at index ${i}`)
})

console.log(add(2 , 3 , 4 , 5))

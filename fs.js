
/**
 * Creating a file 
 * On a file synchronous fs method include : 
 * fs.writeFileSync("path to new files location" , "content to insert") 
 * fs.readFileSync(path to file) 
 * fs.unlinkSync(path to file) 
 * fs.appendFileSync , fs.renameSync 
 * The fs module has synchronous , callback , and promise based form
 * The synchronous form blocks the Node.js event loop and further javascript execution  until the operation is complete.
 * The first argument for your callback in node asynchronous code is always reserved for the exception.
 * If the operation is successful then the exception is null or undefined
 * For promise base fs handling  , use require("fs").promises
 */



const fs = require("fs") 

fs.writeFile('index.html' , `<p>Hello , World</p>/n` , err => {
	if (err) console.log("Error occured")
	console.log("File created successfully") 
}) 

/**
 * Renaming a file 
 */ 
fs.readFile('index.html' , (err , data) => {
	if (err) return console.error(err) 
	console.log(`This is your content : ${data}`) 
}) 

/**
 * Renaming a file 
*/ 
fs.rename('index.html' , 'new.html' , err => {
	if (err) throw err 
	console.log('Rename completed') 
}) 

/**
 * Appending to a file 
*/ 
fs.appendFile('new.html' , '<h2>I am Adeleke Bright</h2>' , err => {
    if (err) return err 
    console.log("Your file was created successfully")
}) 
/**
 * Deleting a file
 */
fs.unlink('index.html' , err => {
	if (err)  throw err 
	console.log('The file was removed') 
}) 
// CRUD OPERATIONS ON FOLDERS 
fs.mkdir("./adebayo" , (err , data) => {
	if (err) console.log(err) 
	console.log("Directory created")
})
fs.rmdir("./adebayo" , (err) => { //This will not work if there is a content in the folder. Delete the contents then 
	if (err) throw new Error("Cannot delete folder") 
	console.log("Folder was dropped")
})

try {
	fs.writeFileSync("index.css" , ".bg-red : #f00")
}catch(err){
	console.error("File Not created")
}
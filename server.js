// Front end code is concerned with how the content is presented e.g color of navigation , etc 
// Back end code is concerned with how data is exchanged , processed , and stored. 
// BE manages network request from browser of communicate with database or the filesystem 
// Lets build a web server that can return plain text , csv files ,json , and html files 
const {createServer}= require("http") 
// Create constants for the host and the port 
const host = "localhost" // Computers use this private address to refer to themselves 
const port = 8000  // The port is a door or endpoint for an IP address 
// You will be able to visit your server on http://localhost:8000 
//Now  , you need to write your request listener which must have two arguments  , 
// a request object , and a response object 
// A request object captures all the data of the HTTP request that's coming in 
// A response object is used to return HTTP responses for the server 

const requestListener = (req , res) => { // The request object must always be the first argument
    res.writeHead(200) //  sets the http status code of the response . Status code indicates how well a request was handled 
    res.end("Hello , this is my second server !") // Return this data after listening to the request and end the current process 

} 

// Now , create your server to listen to the incoming request 
const server = createServer(requestListener) //
server.listen(port , host , () => { //Your server must be binded to a network address
    console.log(`Your server is running at http://${host}:${port}`)
}) 
// Do end-end testing by testing it



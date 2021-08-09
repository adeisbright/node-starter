const {createServer}= require("http") 
const fs = require("fs").promises 
const url = require('url')  
const path = require('path') 
const host = "localhost" 
const port = 8000 

const requestListener = (req , res) => { 
    switch(req.url) {
        case "/" : 
            if (req.method === "GET") {
                res.writeHead(200) 
                res.end(`Welcome to Node beginners guide . You are using a ${req.method} VERB`) 
                break 
            }else {
                res.writeHead(200) 
                res.end(`Currently not hanlding this request`) 
                break 
            }
            
        case "/about" : 
            res.writeHead(200) 
            res.end(`There is so many things about Node`) 
            break 
        case "/contact" : 
            res.writeHead(200) 
            res.end(`Contact Mr Bright for help when you get into trouble`) 
            break 
        default : 
            res.writeHead(404) 
            res.end(`You don lost like this , please return to home`)
    }
     
} 
const server = createServer(requestListener) //
server.listen(port , host , () => { //Your server must be binded to a network address
    console.log(`Your server is running at http://${host}:${port}`)
})
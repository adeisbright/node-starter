const http = require("http") 
const fs   = require("fs")
const path   = require("path")
const host = "localhost" 
const port = 3500 

const requestListener = (req , res) => { 
    switch(req.url) {
        case "/"  : 
            res.writeHead(200 , {"Content-type"  : "text/plain"}) 
            res.end("Welcome to the home section")
            break ; 
        case "/about" : 
            let fileName = "new.html"
            let filePath = path.join(__dirname , fileName)
            fs.readFile(filePath, (err , data) => {
                if (err) new Error("An error occured") 
                res.writeHead(200 , {"Content-type"  : "text/html"}) 
                res.write(data)
                res.end()
            })
            break;
        default : 
            res.writeHead(404 , {"Content-type"  : "text/plain"}) 
            res.end("Error 404 : File No t Found") 

    }
    
} 
http.createServer(requestListener) 
    .listen(port , host , () => {
        console.log(`Your server is on ${host}:${port}`)
    })
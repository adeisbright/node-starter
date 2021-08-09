// Building a RESTFUL web service - A service that utilizes the HTTP Method verbs to expose 
// a concise API 
const {createServer} = require("http")
const url    = require("url") 
const {parse} = require('querystring')
let items    = [] 
const host   = "localhost" 
const port   = 3000

const getFormContent = (req , cb) => {
    
    const FORM_ENCODING = "application/x-www-form-urlencoded" 
    
    if (req.headers["content-type"] === FORM_ENCODING ){ 
        req.setEncoding('utf8');
        let item = ""
        // req.on("data" , chunk => {
        //     item += chunk.toString()
        // }) 
        req.on('data', chunk => {
            item += chunk;
         })
         req.on('end', () => {
            items.push(item);
            cb.end('OK\n')
        })
    }else {
        cb(null)
    }
} 
const requestProcessor = async (req , res) => { 
    let url = req.url , 
    path = ""
    try {
        switch (req.method) {
            case "POST" : 
                getFormContent(req ,res)
            break; 
            case "GET" : 
                if (items.length > 0) { 
                    let body = items.map((val , i) => i + " )" + val ).join("\n")
                    console.log(body)
                    res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
                    res.setHeader('Content-Length', Buffer.byteLength(body));
                    res.writeHead(200 , {"Content-type" : "text/plain"})
                    res.write(body)
                }else {
                    res.write("You currently have no item")
                }
                res.end() 
                break;
            case "DELETE" : 
                path = url.substring(url.length  , url.lastIndexOf("="))
                console.log(path)
                var i = path.slice(1 , 10) 
                if (isNaN(i)) {
                    res.statusCode = 400;
                    res.end('Invalid item id');
                } else if (!items[i]) {
                    res.statusCode = 404;
                    res.end('Item not found');
                } else {
                    items.splice(i, 1);
                    res.end('OK\n');
                }
                break
            case "PUT" : 
                 url = req.url
                 path = url.substring(url.length  , url.lastIndexOf("="))
                console.log(path)
                var i = path.slice(1 , 10) 
                if (isNaN(i)) {
                    res.statusCode = 400;
                    res.end('Invalid item id');
                } else if (!items[i]) {
                    res.statusCode = 404;
                    res.end('Item not found');
                } else {
                    items.splice(i, 1 , "Na me add this one"); // The code is not robust yet
                    res.end('OK\n');
                }
                break
            default : 
                res.writeHead(400 , {"Content-type" : "text/plain"})
                res.end("Error 404")
        }
    }catch(error){
        res.writeHead(500 , {"Content-type" : "text/plain"}) 
        res.end(error.message)
    }
    
}
createServer(requestProcessor)
    .listen(port , host  ,  () => {
        console.log(`Your server is on ${host}:${port}`)
    })
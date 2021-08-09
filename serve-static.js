/**
 * A static file server has a root directory that files are served from 
 * 
 */
//How to generate an SSL certificate (self-signed certificate for testing HTTPs)
const {createServer} = require("http") 
const fs = require("fs")
const {parse} = require("url")
const {join} = require("path") 
const {parse} = require('querystring') 

const root = __dirname 
const host   = "localhost" 
const port   = 3200 
let items = []
const getHandler = async(req , res) => {
    //res.writeHead(200 , {"Content-type" : "text/html"}) 
    let url = parse(req.url) 
    let path = join(root , url.pathname)
    // let stream = await fs.createReadStream(path) // A readable stream can be pipe to any writable stream
    // stream.pipe(res)
    // stream.on('error', function(err){
    //     res.statusCode = 500;
    //     res.end('Internal Server Error');
    // });
    fs.stat(path, function(err, stat){
        if (err) {
            if ('ENOENT' == err.code) {
                res.statusCode = 404;
                res.end('Not Found');
            } else {
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        } else {
            res.setHeader('Content-Length', stat.size);
            var stream = fs.createReadStream(path);
            stream.pipe(res);
            stream.on('error', function(err){
                res.statusCode = 500;
                res.end('Internal Server Error');
            })
        }
    });
}
const postHandler = async (req , res , path) => {
    let body = "" 
    req.setEncoding("utf-8") 
    req.on("data" , chunk => {
       body += chunk
    })
    req.on("end" , () => {
        items.push(parse(body.email))
        await fs.appendFile(path , items) 
        let stream = fs.createReadStream(path) 
        stream.pipe(res) 
        stream.on('error', function(err){
            res.statusCode = 500;
            res.end('Internal Server Error');
       })
    })
}

createServer( (req , res) => {
    if (req.method === "GET") {
        getHandler(req ,res)
    }else if (req.method === "POST"){
        let url = parse(req.url) 
        let path = join(root , url.pathname)
        postHandler(req , res , path)
    }else {
        res.writeHead(404 , {"Content-type" : "text/plain"}) 
        res.end("The file was not found")
    }
}).listen(port , host , () => {
    console.log(`Check your server on ${host}:${port}`)
})
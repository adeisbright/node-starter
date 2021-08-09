const http = require("http") 
const hostname = '127.0.0.1';
const port = 3200; 
const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the home page');
    }else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is not the home page');
    }
}) 

server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
});




// FileHandler.createDirectory("./node/ade") // To create a directory using our module 
// console.log(dirname("The good of joy" , currentDirectory)) 

    // .then(res => 
    //     console.log(res)
    // ).catch(err => console.log(err)) 

// FileHandler.moveFile("new.html" , "./node" , "./ade")
//     .then(res => 
//        console.log(res)
//     ).catch(err => console.log(err))
// The content your web-server can return include text of different format and even binary 
const {createServer}= require("http") 
const fs = require("fs").promises 
const {parse} = require('querystring')
const host = "localhost" 
const port = 8000 

/**
 * 
 * @param {*} req 
 * @param {*} cb 
 */

function collectRequestData(req , cb) { 
    //req.setEncoding("utf-8") // This will set the data to strings instead of binary digits
    // Node triggers a data event when it begins handling http request
	const FORM_URLENCODED = 'multipart/form-data'  //!use multipart/form-data to access files lll 'application/x-www-form-urlencoded'
	if ( req.headers['content-type'] = FORM_URLENCODED ) { 
        if (req.file){
            console.log("File dey the thing")
        }
		let body = ''
        req.on('data' , chunk => { // A chunk by default is a buffer
            // While parsing the http request , the data is always received in chunks 
            // To get all the data , we must concatenate this chunks till when the parsing is completed 
            // and we decide to send back a response when the data event is over
			body += chunk.toString() //!convert the buffer to string 
		})
		req.on('end' , () => {
			cb(parse(body)) 
			
		})
	}else {
		cb(null)
	}
} 

const requestListener = (req , res) => { 
    //Content-Type header is used to indicate the format of the data that is sent
    res.setHeader("Content-Type" , "application/json") // HTTP Headers are additional information that can be attached to a request or response 
    res.writeHead(200) 
    res.end(`{"message" : "This is a message following the JSON format"}`) 
} 

function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err,data) {
    if(err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 - Internal Error');
    } else {
    res.writeHead(responseCode,
    { 'Content-Type': contentType });
    res.end(data);
    }
    });
}
const serveCSV = (req , res) => {
    res.setHeader("Content-Type" , "text/csv") 
    res.setHeader("Content-Disposition" , "attachment;filename=students.csv")
    res.writeHead(200) 
    res.end(`id , name , email\n1 , Adeleke Bright,adetight@gmail.com`) 
} 

const serveHTML = (req , res) => {
    res.setHeader("Content-Type" , "text/html")
    res.writeHead(200) 
    res.end(`
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Node JS</title>
        </head>
        <body>
        <h1>Hello , World</h1>
        </body>
        </html>`
    ) 
}  
//Serving constants files from startup instead of at every request 
const getContent = async (fileName) => {
    try {
        let content = await fs.readFile(__dirname + `/${fileName}`) 
        if (content){
           return content
        }
         throw new Error()
    }catch(error){
       return error
    }
} 
let getHTML = getContent("app.html")

const serveHTMLFromFile = async (req , res) => { 
    try { 
        if (req.method === "GET"){
            let htmlContent = await fs.readFile(__dirname + "/app.html") 
            if (htmlContent){
                console.log("Yes")
                res.setHeader("Content-Type" , "text/html")
                res.writeHead(200) 
                res.end(htmlContent)
            }
        }else if (req.method === "POST"){ 
            collectRequestData(req , result => {
                console.log(result)  
                let bodyContent = JSON.stringify(result) // Strinify the bu
                let parseContent = JSON.parse(bodyContent) 
                let {email} = parseContent
    
                res.writeHead(200 , {'content-type' : 'application/json'}) 
                res.end(`{"message" : "Your email is ${email}"}`) 
                /**
                * let dataSrc = path.join(__dirname + '/public/index.html') 
		        * let dataStream = fs.createReadStream(dataSrc) 
		        * dataStream.pipe(res)
                */
            })
        }
    }catch(error){
        res.writeHead(500) 
        res.end(error)
        return 
    }
}

const serveHTMLOnce = async (req , res) => { 
    try {
        res.setHeader("Content-Type" , "text/html")
        res.writeHead(200) 
        res.end(getHTML)
    }catch(error){
        res.writeHead(500) 
        res.end(error)
        return 
    }
}
const server = createServer(serveHTMLFromFile) 
server.listen(port , host , () => {
    console.log(`Your server is running at http://${host}:${port}`)
}) 
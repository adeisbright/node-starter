const {createServer} = require("http") 
const hostname = '127.0.0.1';
const port = 3200;
//let name = process.env.name 
console.log(process.env.name)
console.log("Please , enter your name") 
let name  = process.argv[2] 
console.log(name)
process.argv.slice(2).map((val , index) => {
	console.log(` ${val} is at index  ${index}`)
})
// Reading From the standard input unit 
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})
const add = require("./add") 
console.log(add(2 , 3 , 5))
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// How to terminate a node program 
/*process.exit(1)
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})*/
// How to read environment variables 

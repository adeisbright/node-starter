//!Working with the path module in node 
const path = require('path') 
const file = '///file.txt' 
//!Normalize a path 
const normal = path.normalize(file) 
console.log(normal)
//!Join paths 
const joinPath = path.join('foo' ,'bar') 
//!dirname , basename , and extname 
const currentDir = path.join(__dirname , file) 
 
const baseName = path.win32.basename(currentDir) //!Get the basename of the file 
const dirName = path.win32.dirname(currentDir)  //!Get the dirname 
const extName  = path.win32.extname(currentDir) //!Get the extname 
//!Checking if a path is absolute 
const absolute = '/desktop/node/file.txt'  
//!Parsing a path 
const pass = path.parse(currentDir) 
console.log(path.isAbsolute(absolute))
//!path.isAbsolute(path) , 
console.log(baseName , dirName , extName)
//!Splitting paths according to platforms 
console.log('foo/bar'.split(path.sep))

//!Using the process module 
console.log(process.env.PATH.split(path.delimiter))
		
		
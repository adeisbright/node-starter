const fs                = require("fs").promises 
const path              = require("path") 
const currentPath       = __dirname 
const directoryName     = path.dirname(currentPath)  
/**
 * 
 * @param fileName Name of the file to move
 * @param oldPath  The current location of the file 
 * @param newPath  The target location for the file
 */
exports.moveFile        = async (fileName , oldPath , newPath) => { 
    try { 
        let oldLocation = `${oldPath}/${fileName}` 
        let newLocation = `${newPath}/${fileName}`
        let move = await fs.rename(
            path.join(directoryName , oldLocation) ,
            path.join(directoryName , newLocation) 
        ) 
        if (move){
            return "The File Was Moved"
        }else {
            throw new Error("File was not found")
        }
    }catch(error){
        return error 
    }
}  

/**
 * 
 * @param name 
 */
exports.createDirectory  = async (name) => { 
    try { 
        let createDir    = await fs.mkdir(path.join(directoryName , name)) 
        if (createDir){
            return "The directory was created"
        }else {
            throw new Error("Problem while trying to create dir")
        }
    }catch(error){
        return error 
    }

} 
/**
 * 
 * @param fileLocation 
 */
exports.deleteFile = async (fileLocation) => { 
	try {
        await fs.unlink(fileLocation) 
        .then(res => {
            return "The file was removed successfully"
        })
        .catch(err => {
            throw new Error(err)
        })
    }catch(error){
        return error 
    }
}
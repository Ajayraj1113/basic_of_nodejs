const fs = require("fs")
const path = require("path")

// folder creation
// fs.mkdir(path.join(__dirname, "test"), function(err){
//     if(err) throw err
//     else console.log("folder is created is successfully")
// })


// create and write file
// fs.writeFile(path.join(__dirname, "test", "hello.txt"), "Hello World!!", function(err){
//     if(err) throw err
//     else console.log("file is created is successfully")
// })

// read file
// fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf-8", function(err, data){
//     if(err) throw err
//     else console.log(data)
// })

// rename file
// fs.rename(path.join(__dirname, "test", "hello.txt"), path.join(__dirname, "test", "bye.txt"), function(err, data){
//     if(err) throw err
//     else console.log("file is renamed successfully")
// })


// delete file
// fs.unlink(path.join(__dirname, "test", "bye.txt"), function(err, data){
//     if(err) throw err
//     else console.log("file is deleted successfully")
// })
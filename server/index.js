const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    // if (req.url === "/") {
    //     fs.readFile(path.join(__dirname, "public", "index.html"), function (err, data) {
    //         res.writeHead(200, { "Content-Type": "text/html" })
    //         res.end(data)
    //     });
    // }
    // else if (req.url === "/about") {
    //     fs.readFile(path.join(__dirname, "public", "about.html"), function (err, data) {
    //         res.writeHead(200, { "Content-Type": "text/html" })
    //         res.end(data)
    //     });
    // }
    // if (req.url === "/services") {
    //     fs.readFile(path.join(__dirname, "public", "services.html"), function (err, data) {
    //         res.writeHead(200, { "Content-Type": "text/html" })
    //         res.end(data)
    //     });
    // }


    // build file path
    let filepath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    console.log("Filepath : ", filepath);
    

    // Add .html if no extension
    if (path.extname(filepath) === "") {
        filepath += ".html";
    }

    // file extension name 
    let extname = path.extname(filepath)
    console.log("Extname : ", extname)

    // initial content type
    let contentType = "text/html"

    switch(extname){
        case ".js": 
        contentType = "text/javascript";
        break
        case ".html": 
        contentType = "text/html";
        break
        case ".css": 
        contentType = "text/css";
        break
        case ".jpeg": 
        contentType = "text/jpeg";
        break
        case ".png": 
        contentType = "text/png";
        break
        case ".json": 
        contentType = "application/json";
        break
    }

    // read file
    fs.readFile(filepath, function(err, data){
        if (err){
            // if(err.code ===  "ENONET"){
                // page not found
                console.log(err)
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, data)=> {
                    res.writeHead(200, {"Content-Type" : "text/html"})
                    res.end(data)
                })
            // }else {
            //     res.writeHead(500);
            //     res.end(`Server Error :${err.code}`)
            // }
        }else {
            res.writeHead(200,{"Content-Type": contentType});
            res.end(data)
        }
    })
});

server.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

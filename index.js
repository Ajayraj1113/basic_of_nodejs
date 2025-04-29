const http = require("http");
const fs = require("fs");

const PORT = 3000;
const server = http.createServer(function (req, res) {
  // console.log(req)

  res.write("<h1>Hello World!! how are you!!</h1>")
  res.end()

  // if (req.url === "/favicon.ico") return res.end();

  // const method = req.method
  // const log = `${Date.now()}: ${method} ${req.url} New Request is Received\n`;
  // fs.appendFile("./log.txt", log, (err, data) => {
  //   switch (req.url) {
  //     case "/":
  //       res.end("Home Page");
  //       break;
  //     case "/about":
  //       res.end("About Page");
  //       break;

  //     default:
  //       res.end("404 Page not Found");
  //       break;
  //   }
  // });
});

server.listen(PORT, () => {
  console.log(`Server is running is on https://localhost/${PORT}`);
});

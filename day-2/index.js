const http = require("http")
const fs = require("fs")

const PORT = 8080

const myServer = http.createServer((request,response) => {

    const log = `${Date.now()} and from ${request.url} New Request Recieved \n`;

    fs.appendFile("log.txt",log, (err)=>{
        if(err){
            console.log("Error writing to the log file:" , err);
            response.statusCode = 500;
            response.end("Internal server error")
            return;
        }

        response.end("Hello World from Server")
    })

    response.end("hello from server babu")
})

myServer.listen(PORT, ()=>{
    console.log(`Server is connected on PORT: ${PORT}`)    
})
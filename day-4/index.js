const http = require("http")
const fs = require("fs")
const {Transform,pipeline} = require("stream")

const server = http.createServer((req,res) =>{

//?-------------1--------------

//! 1. Downloading file in bad way
    // const file = fs.readFileSync("sample.txt");
    // res.end(file);

//* 2. Downloading file in GOOD way
    // const readableStream = fs.createReadStream("sample.txt")
    // readableStream.pipe(res)
    

//?------------2---------------

//! 1 Copying file in bad way
    // const file = fs.readFileSync("Sample.txt")
    // fs.writeFileSync("Output.txt",file)
    // res.end(file);

//* Copying file in GOOD way
    // const readStream = fs.createReadStream("sample.txt")
    // const writeStream = fs.createWriteStream("output.txt")

    // readStream.on("data", (chunk)=>{
    //     console.log("chunk :",chunk);
    //     writeStream.write(chunk);
    // })


//? -----------3--------String Processing---------

//upercase()
//ipsum --> Rahul

    const readStream = fs.createReadStream("Sample.txt");
    const writeStream = fs.createWriteStream("output.txt")

    const transformStream = new Transform({
        transform(chunk, encoding, callback){
            const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Rahul")
            callback(null,modifiedWord)
        }
    })

    //! Bad approach
    // readStream.on("data",(chunk)=>{
    //     const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi,"Rahul")
    //     writeStream.write(modifiedWord)
    // })

    //* GOOD approach using pipe

    // readStream.pipe(transformStream).pipe(writeStream)
    

    pipeline(readStream,transformStream,writeStream, (err)=>{console.log(err);
    })
    res.end()
})

server.listen(8080, ()=>{
    console.log("Server is connected at : ", 8080)
})

// transformStream --> is both --> readable and writable
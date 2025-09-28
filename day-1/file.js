const fs = require("fs");
const os = require("os");

console.log(os.cpus().length)

//? sync: Blocking code, async : Non blocking code

//* write --------------------------------

fs.writeFileSync("text.txt", "Hello world this is sync writing ");

fs.writeFile("test.txt", "hello world this is async code ", (err) => {
  console.log(err);
});

//* read ---------------------------------

const res = fs.readFileSync("text.txt", "utf-8")
console.log(res);

fs.readFile("test.txt", "utf-8" , (error, response)=> {
    if(error){
        console.log(error)
    }else{
        console.log(response);
        
    }
})

//* update /append ------------------------

// fs.appendFileSync("text.txt",new Date().toDateString())

fs.appendFile("test.txt", `Now i am appending text at ${new Date().toDateString()} \n` , (err,res) => {
    if(err){
        console.log(error);
    }else{
        console.log(res);
    }
})

//*


//* ASSIGNMENT
// 1. cpSync
// 2. unlinkSync
// 3. statSync
// 4. mkdirSync
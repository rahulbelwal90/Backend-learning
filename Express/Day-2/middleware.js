import express from "express";

//* Inbuilt Middleware 
app.use(express.json());    // to parse the json body

const app = express();
const PORT = 3000;

//* Global Middleware

function SayHiMiddleware(req,res,next){
    console.log("Hi i am middleware");
    next();
}

// the way of calling global middleware
// app.use(SayHiMiddleware)

//* specific routes middleware

app.get("/", SayHiMiddleware, (req,res)=>{
    res.send("hello")
})

app.get("/users", (req,res)=>{
    res.send("User page")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    
})
import express from "express";
import data from "./data/data.js"

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

//Industry standard
app.get("/api/v1/users", (req,res) =>{
  // Query Param
    const {name} = req.query;
    console.log(req.query);
    

    if(name){
      const user = data.filter((user)=>{
        return user.name === name
      })
      res.status(200).send(user)
    }
    res.status(200).send(data)
})

// router params
app.get("/api/v1/users/:id", (req,res)=>{
  console.log(req.params);
  const {id} = req.params
  const parseId = parseInt(id)

  if(id){
    const user = data.find((user)=> user.id === parseId)
    res.status(200).send(user)
    }
  }
)





app.listen(PORT, (req, res) => {
  console.log(`Server is running at port ${PORT}`);
});

import express from "express";
import data from "./data/data.js"

const app = express();
const PORT = 8080;
app.use(express.json())

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

//* @ POST Request : It is for sending data to server

app.post("/api/v1/users", (req,res)=>{
  console.log(req.body);
  const {name, displayname} = req.body

  const newUser = {
    id:data.length + 1,
    name,
    displayname
  }

  data.push(newUser)

  res.status(201).send(
    {
      message:"User Created",
      data:newUser
    }
  )
})

//* PUT Request (UPDATE all field)

app.put("/api/v1/users/:id", (req,res)=>{
  const {
    body,
    params: {id},
  } = req;

  const parseID = parseInt(id);
  const userIndex = data.findIndex((user) => user.id === parseID);

  if(userIndex === -1){
    res.status(404).send("User Not Found");
  }

  data[userIndex] = {
    id: parseID,
    ...body
  }

  res.status(201).send(
    {
      message: "user updated",
      data: data[userIndex]
    }
  )
})


//* PATCH Request ( Update specific feild)

app.patch("/api/v1/users/:id", (req,res)=>{
  const {
    params:{id},
    body
  } = req;

  const parseID = parseInt(id);
  const userIndex = data.findIndex((user)=> user.id === parseID);

  if(userIndex === -1){
    res.status(404).send("User not found");
  }

  data[userIndex] = {
    ...data[userIndex],
    ...body
  }
  
  res.status(201).send(
    {
      message: "User",
      data: data[userIndex]
    }
  )
})


app.listen(PORT, (req, res) => {
  console.log(`Server is running at port ${PORT}`);
});

import express from "express";
import { data } from "./data/data.js";

const app = express();
app.use(express.json());

const PORT = 8080;

//* 1 GET Request (It is for fetching the data from server)

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

// Industry Standard
app.get("/api/v1/users", (req, res) => {
  const { name } = req.query;
  if (name) {
    const userData = data.filter((user) => {
      return user.name === name;
    });
    res.status(200).send(userData);
  }

  // Query Param
  res.status(200).send(data);
});

// Router Params
app.get("/api/v1/users/:id", (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);

  const user = data.find((user) => user.id === parsedId);
  res.status(200).send(user);

  console.log(req.params);
  res.status(200).send("User found");
});

//* 2. POST request (it is for sending data to server)

app.post("/api/v1/users", (req, res) => {
  const { name, displayname } = req.body;
  console.log(name, displayname);

  const newUser = {
    id: data.length + 1,
    name,
    displayname,
  };

  data.push(newUser);

  res.status(201).send({
    message: "User Created",
    data: newUser,
  });
});

//* PUT Request (Update all fields)

app.put("/api/v1/users/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const parsedId = parseInt(id)
  const userIndex = data.findIndex((user)=>user.id === parsedId);

  if(userIndex === -1){
    res.status(404).send("User not found");
  }
  data[userIndex] = {
    id: parsedId,
    ...body
  }

  res.status(200).send({
    message:"User Updated",
    data: data[userIndex]
  });
});

//* PATCH Request (Update specific Field)

app.patch("/api/v1/users/:id", (req, res) => {
  const {
    body,
    params: { id }
  } = req;

  const parsedId = parseInt(id)
  const userIndex = data.findIndex((user)=>user.id === parsedId);

  if(userIndex === -1){
    res.status(404).send("User not found");
  }
  data[userIndex] = {
    ...data[userIndex],
    ...body
  }

  res.status(200).send({
    message:"User Updated",
    data: data[userIndex]
  });
});

//* Delete Request

app.delete("/api/v1/users/:id", (req, res) => {
    const {
        params: { id },
    } = req;

    const parsedId = parseInt(id);
    const userIndex = data.findIndex((user) => user.id === parsedId);

    if (userIndex === -1) {
        return res.status(404).send("User not found");
    }

    // Remove the user from the data array
    const deletedUser = data.splice(userIndex, 1)[0];


    res.status(200).send({
        message: "User deleted successfully",
        data: deletedUser
    });
});


app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT: ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const users = ["Messi", "Suarez", "Neymar", "Aguaero", "Di Maria"];

// get

app.get("/", (req, res) => {
  const fruit = {
    product: "banana",
    price: 200,
  };
  res.send(fruit);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

// post

app.post("/addUser", (req, res) => {
  const user = req.body;
  user.id = 55;
  res.send(user);
});

app.listen(4000, () => console.log("Listening to port 4000"));

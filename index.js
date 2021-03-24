const express = require("express");
const cors = require("cors");
const app = express();

app.get("/", (req, res) => {
  const fruit = {
    product: "banana",
    price: 200,
  };
  res.send(fruit);
});

app.use(cors());

const users = ["Asad", "Fasad", "Sajad", "Nazad"];

app.get("/fruits/banana", (req, res) => {
  res.send({ fruit: "banana", quantity: 1000, price: 20000 });
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

app.listen(4000, () => console.log("Listening to port 4000"));

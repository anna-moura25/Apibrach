const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("dei commit aqui");
});


app.listen(3005, () => {
  console.log("Servidor on");
});
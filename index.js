const express = require("express");
const port = 2000;
const app = express();
const routes = require("./routes/pageroutes");

app.set("view engine", "ejs");
app.set("views", "frontend");

//add middleware
app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log("server is up and running");
});

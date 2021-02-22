const express = require("express");
const app = express();
const helmet = require("helmet");

// wear your helmet to protect your application request headers
app.use(helmet());

app.use(express.static("public"));
// middleware in setting request headers
app.use(express.json());
// middleware for reading data from the request body
app.use(express.urlencoded({ extended: false }));

app.post("/ajax", (req, res) => {
  console.log(req.headers["content-type"]);
  console.log(req.body);
  res.json("POSTing");
});

app.listen(3000);
console.log("App running on port 3000");

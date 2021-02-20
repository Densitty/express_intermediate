const express = require("express");

const app = express();

const validator = (req, res, next) => {
  console.log("running validator middleware");
  res.locals.validated = true;
  next();
};

// middleware for all http methods on the '/admin' route/path
app.use("/admin", validator);

// middleware will run for only GET method for the '/admin' route
// app.get("/admin", validator);

// middleware for all http methods on all '/' routes/paths
// app.use("/", validator);

app.get("/", (req, res) => {
  console.log(res.locals);
  res.send("<h1>Homepage</h1>");
});

app.get("/admin", (req, res) => {
  res.send("<h1>Admin Page</h1>");
});

app.listen(3000);

const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes"); // Remove the function invocation
require("./db");
const port = 4500;

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/", (req, res)=>{
  res.send("Hello World");
});
app.use("/api/", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// module.exports = app

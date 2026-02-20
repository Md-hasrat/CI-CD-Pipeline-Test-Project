const express = require("express");
require("dotenv").config();
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;



// Parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.get("/", (req, res) => {
  res.send("Hello, World! This is a CI/CD pipeline test.    ");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



module.exports = app;

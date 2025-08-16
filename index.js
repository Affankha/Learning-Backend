const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./db");
const student = require("./routes/student");

dotenv.config();
connectDB();
app.use(express.json());
app.use("/api", student);

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("working on backend");
});

app.listen(port, () => {
  console.log(`The port is running on localhost://${port}`);
});

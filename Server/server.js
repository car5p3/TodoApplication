const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const db = require("./db");

db();

const PORT = process.env.PORT || 3000 || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/todo/", require("./routes/todoRoutes"));

app.get("/api/", (req, res) => {
  res.status(200).send("API Up & Running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/auth");
const connectDb = require("./utils/db");

const app = express();
connectDb();
app.use(express.json());
app.use("/api/auth", router);

app.get("/", (req,res)=>{
  res.status(200).send("welcome to nukkadHelp")
});
app.get( "/register",(req,res)=>{
  res.status(200).send("welcome to registration")
});

//mongoose.connect("mongodb://127.0.0.1:27017/nukkadhelp", {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const app = express();
const cors = require("cors");
const { UserRouter } = require("./routes/user.router");
const { ConnectDB } = require("./config/db");



// middleware 
app.use(cors());
app.use(express.json());


app.use("/user",UserRouter);


app.listen(3000,async()=>{
  await ConnectDB
  console.log("server is running")
})
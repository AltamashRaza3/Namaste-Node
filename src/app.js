const express = require('express');

//Creating a new express.js application
const app = express();

app.get("/",(req,res)=>{
  res.send("Namaste from the Dashboard");
})

app.get("/test",(req,res)=>{
  res.send("Hello from the server");
})

app.get("/hello",(req,res)=>{
  res.send("Hello Hello Hello");
})

app.listen(3000,()=>{
  console.log("Server is successfully listining on Port n0 3000");
});
const express = require('express');

const app= express();

// Handle Auth Middleware for all GET,POST,.... request
app.use("/admin",(req,res,next)=>{
  const token = "xyz";
  const isAdminAuthorized= token ==="xyz";
  if(!isAdminAuthorized){
   res.status(401).send("UnAuthorized Request");
  }
  else{
    next();
  } 
})


app.get("/admin/getAllData",(req,res)=>{
    res.send("All Data Sent");
})

app.get("/admin/deleteUser",(req,res)=>{
   res.send("Deleted a user");
  }) 

app.listen(7777,()=>{
  console.log("Server is successfully listening on port 7777...")
})
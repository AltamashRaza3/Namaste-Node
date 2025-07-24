const express = require('express');

const app= express();

app.get("/admin/getAllData",(req,res)=>{
  //Logic if the request is authorized 
  res.send("All Data is sent")
})

app.get("/admin/deleteUserData",(req,res)=>{
  // Logic of checking if the user is authorized 
})






app.listen(7777,()=>{
  console.log("Server is successfully listening on port 7777...")
})
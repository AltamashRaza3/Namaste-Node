const express = require('express');
const connectDB= require("./config/database");
const app= express();
const User= require("./models/user.js")

// Creating API for posting userdata
app.post("/signup",async (req,res)=>{
  // Creating a new instance of the user model
    const user = new User({
    firstName: "Virat",
    lastName: "Kholi",
    emailId:"viratkholi.ar@gmail.com",
    password: "ViratKholi@123"
  });
  try {
    await user.save();
    res.send("User Added Successfully");
  } catch (error) {
    res.status(400).send("Error in saving the user:" + error.message)
  }
});

connectDB() 
.then(()=>{
  console.log("DataBase connection established....");
  app.listen(7777,()=>{
  console.log("Server is successfully listening on port 7777...")
})
}).catch(error => {
  console.error("DataBase cannot be connected");
})


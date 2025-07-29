const express =require('express');
const connectDB= require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());
// Creating API for posting user Data
app.post("/signup",async (req,res)=>{
  // Creating a new insatance for the user Model
    const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added Successfully");
  } catch (error) {
    res.status(400).send("Error in saving the user: "+ error.message)
  }
}) 
 
//Find user by email-Id
app.get("/user",async(req,res)=>{
  const userEmail= req.body.emailId;
  try {
   const users= await User.find({emailId: userEmail})
   if(users.length === 0){
    res.status(404).send("Email-Id not found");
   }
   else{
    res.send(users);
   }
  } catch (error) {
    res.status(400).send("Something Went wrong");
  }
})

// For get only one user when 2 users have same emailId:
app.get("/user",async(req,res)=>{
  const userEmail= req.body.emailId;
  try {
    const user= User.findOne({emailId:userEmail})
    res.send(user);
  } catch (error) {
    res.status(400).send("Something Went Wrong");
  }
})

// Feed API - GET/Feed -get all the user form the database
app.get("/feed",async(req,res)=>{
  try {
    const users= await User.find({})
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
})

 

connectDB() 
.then(()=>{
  console.log("Connection is established...");
  app.listen(7777,(req,res)=>{
  console.log("Server is started listening on 7777");
})
}).catch((error)=>{
  console.log("Database can't be connected",error)
})


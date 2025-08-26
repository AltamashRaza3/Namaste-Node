const express =require('express');
const connectDB= require("./config/database");
const app = express();
const User = require("./models/user");
const {validateSignupData} = require("./utils/validation");
const bcrypt = require("bcrypt");

app.use(express.json());
// Creating API for posting user Data
app.post("/signup",async (req,res)=>{
try {
  // Validation of data
  validateSignupData(req); 
  const {firstName,lastName,emailId,password,gender} = req.body;

  // Encrypt the password
  const passwordHash = await bcrypt.hash(password,10); 
  console.log(passwordHash);

  // Creating a new insatance for the user Model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
      gender,
    });
    await user.save();
    res.send("User Added Successfully");
  } catch (error) {
    res.status(400).send("Error: "+ error.message)
  }
}) 
 
app.post("/login",async(req,res) => {
  try {
    const {emailId, password} =req.body;

    const user = await User.findOne({emailId:emailId});
    if(!user){
      throw new Error ("Invalid credentials");
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(isPasswordValid){

     // Create JWT Token

     // Add the Token to cookies and send the response back to the user.
      res.cookie("token","khdfihaelfuuerofueruibrfuiei")
      res.send("Login successfull");
    }
    else{
      throw new Error ("Invalid credentials");
    }
  } catch (error) {
    res.status(400).send("Error: "+ error.message);
  }
})

app.get('/profile',async(req,res)=>{
  const cookie = req.cookies;
  console.log(cookie);
  res.send("Reading cookies");
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

// Delete a user from the database
app.delete("/user",async(req,res)=>{
  const userId =req.body.userId;
  try {
    const user= await User.findByIdAndDelete(userId)
    res.send("User deleted successfully");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
})

//Update data of the user:
app.patch("/user/:userId",async(req,res)=>{
  const userId= req.params?.userId;
  const data= req.body;
  try {
    const ALLOWED_UPDATES =[
    "userId",
    "photoUrl",
    "about",
    "gender",
    "age",
    "skills",
  ]
  const isUpdateAllowed = Object.keys(data).every((k)=>
  ALLOWED_UPDATES.includes(k)
  );
  if(!isUpdateAllowed){
    throw new Error("Update not allowed");
  }
  if(data?.skills && data.skills.length>10){
    throw new Error("Skills can not be more than 10")
  }
    const UserData=await User.findByIdAndUpdate({_id:userId},data,{
      returnDocument: "after",
      runValidators: true,
    } );
    console.log(UserData);
    res.send("User Updated Successfully");
  } 
  catch (error) {
    res.status(400).send("UPDATE FAILED"+ error.message);
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


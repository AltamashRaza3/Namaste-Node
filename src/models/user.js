const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true,
    minLength: 3,
    maxLenght: 50

  },
  lastName:{
    type:String,

  },
  emailId:{
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,  

  },
  password:{
    type:String,
  },
  age:{
    type:String,
  },
  gender:{
    type: String,
    required: true,
    trim: true,
    
  },
});

module.exports = mongoose.model("User",userSchema); 
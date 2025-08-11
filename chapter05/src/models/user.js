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
    required: true
  },
  age:{
    type:Number,
  },
  gender:{
    type: String,
    required: true,
    trim: true,
  },
  photoUrl:{
    type: String,
  },
  description:{
    type: String,
  },
  skills:{
    type: [String],
    default: "This is default description"
  }
});

module.exports = mongoose.model("User",userSchema); 
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
    validate(value) {
    if (!["male", "female", "others"].includes(value)) {
    throw new Error("Not a valid gender (Male , Female and other)")
    }
    }
  },
});

module.exports = mongoose.model("User",userSchema); 
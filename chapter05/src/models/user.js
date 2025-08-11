const mongoose = require('mongoose');
const validtor= require('validator');
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
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Inavlid GmailId: "+ value)
      }
    }
  },
  password:{
    type:String,
    required: true,
     validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("Enter strong Password: "+ value)
      }
    }
  },
  age:{
    type:Number,
    min: 18,
    max: 50,
  },
  gender:{
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    validate(value){
      if(!["male","female","others"].includes(value)){
        throw new Error("Gender Data is not valid");
      }
    }
  },
  photoUrl:{
    type: String,
    default: "https://www.pnrao.com/wp-content/uploads/2023/06/dummy-user-male.jpg",
    validate(value){
      if(!validator.isURL(value)){
        throw new Error("Invalid Photo URL: "+ value)
      }
    }
  },
  description:{
    type: String,
  },
  skills:{
    type: [String],
    default: "This is default description",

  }
},{
  timestamps: true,
});

module.exports = mongoose.model("User",userSchema); 
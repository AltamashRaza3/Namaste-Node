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
  },
  description:{
    type: String,
  },
  skills:{
    type: [String],
    default: "This is default description"
  }
},{
  timestamps: true,
});

module.exports = mongoose.model("User",userSchema); 
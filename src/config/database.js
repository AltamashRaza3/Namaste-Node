const mongoose = require('mongoose');

const connectDB= async ()=>{
 await mongoose.connect(
  "mongodb+srv://altamashraza3ar:5nDyXbSqVseYT35U@cluster0.i4e4frs.mongodb.net/devTinder"
);
};

module.exports= connectDB;




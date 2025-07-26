const express = require('express');

//Creating a new express.js application
const app = express();

// Dynamic API's
 app.get("/user/:userId",(req,res)=>{
  console.log(req.params)
  res.send({firstName: "Altamash",lastName:"Raza"});
})


// Query Parms in the routes:
// app.get("/user",(req,res)=>{
//   console.log(req.query)
//   res.send({firstName: "Altamash",lastName:"Raza"});
// })

// Advanced Routing:
// app.get(/.*fly$/,(req,res)=>{
//   res.send({firstName: "Altamash",lastName: "Raza"});
// })

// This will handle GET call
//  app.get("/user",(req,res)=>{
//   res.send({firstName: "Altamash",lastName:"Raza"})
// });

// app.post("/user",(req,res)=> {
//   res.send("Data Scuccessfully saved to the Database");
// })
// app.delete("/user",(req,res)=>{
//   res.send("Data is successfully deleted");
// }) 
// this will match all the HTTP method API call to /test
// app.use("/test",(req,res)=>{
//   res.send("Hello from the server");
// })

// app.get("/",(req,res)=>{
//   res.send("Namaste from the Dashboard");
// })
// app.get("/hello",(req,res)=>{
//   res.send("Hello Hello Hello");
// })

app.listen(3000,()=>{
  console.log("Server is successfully listining on Port 3000");
});

const adminAuth = (res,req,next)=>{
  console.log("Admin Auth is getting checked!!");
  const token = "xyz";
  const isAdminAuthorized = token ==="xyz";
  if(!isAdminAuthorized){
    res.status(401).send("UnAuthorized Request");
  }
  else{
    next();
  }
};

const userAuth = (res,req,next)=>{
  console.log("User Auth is getting checked!!");
  const token = "xyzk";
  const isUserAuthorized = token ==="xyzk";
  if(!isUserAuthorized){
    res.status(401).send("UnAuthorized Request from user");
  }
  else{
    next();
  }
};


module.exports ={
  adminAuth,
  userAuth,
}
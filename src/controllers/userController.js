const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


// ================= [1] ==================================
const createUser = async function (req, res) {
  //You can name the req, res objects anything.  
  //but the first parameter is always the request 
  //the second parameter is always the response
  try {
    let data = req.body;
    if(!data.mobile){
      res.status(400).send({error: "mobile no. should be present"})
    } else {
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
    }
}
  catch(err){
    res.status(500).send({msg :"Error", error:err.message})
    console.log(err)
} 
};


// ================= [2] ==================================
const loginUser = async function (req, res) {  
  try{ 
  let userName = req.body.emailId;
  let password = req.body.password; 

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(403).send({
      status: false,
      msg: "username or the password is not correct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, token: token });
  }
  catch(err){
    res.status(500).send({msg :"Error", error:err.message})
  }
};

// ================= [3] ==================================
const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  // if (!userDetails)
    // return res.send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
  }
  catch(err){
    res.status(500).send({msg :"Error", error:err.message}) 
    
} 
};

// ================= [4] ==================================
const updateUser = async function (req, res) {

 try{
  let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new : true});
  res.status(200).send({ status: true, data: updatedUser });
 }
   catch(err){
    res.status(500).send({msg :"Error", error:err.message}) 
  
 }
};

// ================= [5] ==================================
 const deleteUser = async function(req, res){

try{
let userId = req.params.userId;
let deletedData = await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
res.status(200).send({status : true, data: deletedData})
}
catch(err){
 res.status(500).send({msg :"Error", error:err.message}) 

}
};
 
// module.exports ={createUser,loginUser,getUserData,updateUser,deleteUser}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;


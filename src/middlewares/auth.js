const jwt = require("jsonwebtoken")

let decodedToken
//  Authentication
const mid = async function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    
    //If no token is present in the request header return error
    if (!token) { 
        return res.send({ status: false, msg: "token must be present" });
    } else {
       decodedToken = jwt.verify(token, 'functionup-radon')
       if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
       next()
    }
} 

// Authorisation

const mid2 = async function(req,res,next){ 

    // let token = req.headers["x-Auth-token"];
    // if (!token) token = req.headers["x-auth-token"];
    // let decodedToken = jwt.verify(token, 'functionup-radon')
    // if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
//userId for which the request is made. In this case message to be posted.
let userToBeModified = req.params.userId
//userId for the logged-in user
let userLoggedIn = decodedToken.userId

//userId comparision to check if the logged-in user is requesting for their own data
if(userToBeModified != userLoggedIn) {return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
}else{
    next()
} 
}



module.exports.mid = mid
module.exports.mid2 = mid2  

const jwt = require("jsonwebtoken");
const roles = require("../models/roles.model");
// const {Role} = require("../models/user.model")
const user = require("../models/user.model")
require('dotenv').config();
// const secret = "secret"

const authenticate = (req,res,next) =>{
  jwt.verify(req.cookies.usertoken,process.env.SECRET_KEY,(err,payload)=>{
      if(err){
          res.status(401).json({verified:false})
      }else 
      next();
  })
}
const  authRole = () =>{
  return (req, res, next) =>{
    if (user[req.body] !== "Admin"){
    res.status(401)
    return res.send("not allowed")
  }
  next()
}
}
const authRoles = (roles =[]) => {
  if (roles === "string"){
  roles = [roles]


  }
    return[
      ({jwt:process.env.SECRET_KEY, algorithms: ["HS256"]}),
  
    (req, res,next) => {
      if(roles.length && !roles.includes(req.user.role)){
        return res.status(401).json({message:"Unathorized"})
      }
      next()
    }
  ]

} 

const checkRole = (roles) => (req, res, next) =>
  roles.includes(req.user.role)
    ? next()
    : res.status(401).send({ message: 'Unauthorized', status: false })
// const authenticate = async(req,res,next) =>{
//   try{
//     decodedjwt = await jwt.verify(req.cookies.usertoken,process.env.SECRET_KEY)
//     req.body.user_id = decodedjwt.id
//     next();
//   } catch (err) {
//     console.log("token error")
//   }
// } 

// const generateToken = (id) =>{
//     return jwt.sign({id}, secret,{
//         expiresIn:"30d",
//     });
// };
// module.exports.secret = secret;
// module.exports.authenticate = (req, res, next) => {
//   jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
//     if (err) { 
//       res.status(401).json({verified: false});
//     } else {
//       next();
//     }
//   });
// }


module.exports = {
  authenticate,
  authRole,
  checkRole,
  authRoles,

}









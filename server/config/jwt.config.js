const jwt = require("jsonwebtoken");
// const secret = "secret"

const authenticate = (req,res,next) =>{
  jwt.verify(req.cookies.usertoken,process.env.SECRET_KEY,(err,payload)=>{
      if(err){
          res.status(401).json({verified:false})
      }else 
      next();
  })
}

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
  // generateT

}









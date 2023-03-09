const Owner = require("../models/bayRampOwners.model")


module.exports ={

createOwner:(req,res)=>{
    // const verifyJwt= jwt.verify(req.cookies.usertoken,process.env.SECRET_KEY,{complete:true})  
    Owner.create(req.body)
    .then((create)=>{res.status(201).json(create)})
    .catch((err)=>{console.log( err)
    res.status(400).json(err)
 })
},
getOwners:(req,res)=>{
    Owner.find({})
    // .populate("owners", "fullName email information phoneNumber")
    .then((owners)=>{res.json(owners)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},

}
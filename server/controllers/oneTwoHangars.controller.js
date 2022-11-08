const sql = require("../models/oneTwoHangars.model")


module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .then((oneTwoHangars)=>{res.json(oneTwoHangars)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
createSql:(req,res)=>{
    sql.create(req.body)
    .then((createOneTwoHangars)=>{res.status(201).json(createOneTwoHangars)})
    .catch((err)=>{console.log("error in creating sql inputs", err)
    res.status(400).json({message:"Something went wrong in creating all SQL inputs"})
 })
},
getSqlById:(req,res)=>{
    sql.findOne({_id:req.params.id})
    .then((oneTwoHangars)=>{res.json(oneTwoHangars)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
updateSql:(req,res)=>{
    sql.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateOneTwoHangars)=>res.json(updateOneTwoHangars))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteOneTwoHangars)=> res.json(deleteOneTwoHangars))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
}



}
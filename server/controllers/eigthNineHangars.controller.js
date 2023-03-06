const sql = require("../models/eigthNineHangars.model")


module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .then((eigthNineHangars)=>{res.json(eigthNineHangars)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
createSql:(req,res)=>{
    sql.create(req.body)
    .then((createEigthNineHangars)=>{res.status(201).json(createEigthNineHangars)})
    .catch((err)=>{console.log( err)
    res.status(400).json(err)
 })
},
getSqlById:(req,res)=>{
    sql.findOne({_id:req.params.id})
    .then((eigthNineHangars)=>{res.json(eigthNineHangars)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
updateSql:(req,res)=>{
    sql.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateEigthNineHangars)=>res.json(updateEigthNineHangars))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteEigthNineHangars)=> res.json(deleteEigthNineHangars))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
}



}
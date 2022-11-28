const sql = require("../models/bayRamp.model")


module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .then((bayRamp)=>{res.json(bayRamp)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
createSql:(req,res)=>{
    sql.create(req.body)
    .then((createBayRamp)=>{res.status(201).json(createBayRamp)})
    .catch((err)=>{console.log("error in creating sql inputs", err)
    res.status(400).json({message:"Something went wrong in creating all SQL inputs"})
 })
},
getSqlById:(req,res)=>{
    sql.findOne({_id:req.params.id})
    .then((bayRamp)=>{res.json(bayRamp)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
updateSql:(req,res)=>{
    sql.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateBayRamp)=>res.json(updateBayRamp))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteBayRamp)=> res.json(deleteBayRamp))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
}



}
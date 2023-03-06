const sql = require("../models/executiveRamp.model")


module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .then((executiveRamp)=>{res.json(executiveRamp)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
createSql:(req,res)=>{
    sql.create(req.body)
    .then((createExecutiveRamp)=>{res.status(201).json(createExecutiveRamp)})
    .catch((err)=>{console.log(err)
    res.status(400).json(err)
 })
},
getSqlById:(req,res)=>{
    sql.findOne({_id:req.params.id})
    .then((executiveRamp)=>{res.json(executiveRamp)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
updateSql:(req,res)=>{
    sql.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateExecutiveRamp)=>res.json(updateExecutiveRamp))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteExecutiveRamp)=> res.json(deleteExecutiveRamp))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
}



}
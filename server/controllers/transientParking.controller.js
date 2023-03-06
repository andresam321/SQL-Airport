const sql = require("../models/tshadeRamp.model")


module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .then((transientParking)=>{res.json(transientParking)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
createSql:(req,res)=>{
    sql.create(req.body)
    .then((createTransientParking)=>{res.status(201).json(createTransientParking)})
    .catch((err)=>{console.log(err)
    res.status(400).json(err)
 })
},
getSqlById:(req,res)=>{
    sql.findOne({_id:req.params.id})
    .then((transientParking)=>{res.json(transientParking)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
updateSql:(req,res)=>{
    sql.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateTransientParking)=>res.json(updateTransientParking))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteTransientParking)=> res.json(deleteTransientParking))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
}



}
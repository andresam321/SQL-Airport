const sql = require("../models/northTower.model")


module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .then((northTower)=>{res.json(northTower)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
createSql:(req,res)=>{
    sql.create(req.body)
    .then((createNorthTower)=>{res.status(201).json(createNorthTower)})
    .catch((err)=>{console.log("error in creating sql inputs", err)
    res.status(400).json({message:"Something went wrong in creating all SQL inputs"})
 })
},
getSqlById:(req,res)=>{
    sql.findOne({_id:req.params.id})
    .then((northTower)=>{res.json(northTower)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
updateSql:(req,res)=>{
    sql.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateNorthTower)=>res.json(updateNorthTower))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteNorthTower)=> res.json(deleteNorthTower))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
}



}
const sql = require("../models/hillerAviation.model")


module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .then((hillerAviation)=>{res.json(hillerAviation)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
createSql:(req,res)=>{
    sql.create(req.body)
    .then((createHillerAviation)=>{res.status(201).json(createHillerAviation)})
    .catch((err)=>{console.log("error in creating sql inputs", err)
    res.status(400).json({message:"Something went wrong in creating all SQL inputs"})
 })
},
getSqlById:(req,res)=>{
    sql.findOne({_id:req.params.id})
    .then((hillerAviation)=>{res.json(hillerAviation)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
updateSql:(req,res)=>{
    sql.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateHillerAviation)=>res.json(updateHillerAviation))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteHillerAviation)=> res.json(deleteHillerAviation))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
}



}
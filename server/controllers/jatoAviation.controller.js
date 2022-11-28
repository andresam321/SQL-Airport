const sql = require("../models/jatoAviation.model")


module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .then((jatoAviation)=>{res.json(jatoAviation)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
createSql:(req,res)=>{
    sql.create(req.body)
    .then((createJatoAviation)=>{res.status(201).json(createJatoAviation)})
    .catch((err)=>{console.log("error in creating sql inputs", err)
    res.status(400).json({message:"Something went wrong in creating all SQL inputs"})
 })
},
getSqlById:(req,res)=>{
    sql.findOne({_id:req.params.id})
    .then((jatoAviation)=>{res.json(jatoAviation)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
updateSql:(req,res)=>{
    sql.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateJatoAviation)=>res.json(updateJatoAviation))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteJatoAviation)=> res.json(deleteJatoAviation))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
}



}
const sql = require("../models/thirteenThroughFifteenHangars.model")
// tTfHangars = ThirteenThroughFifteenHangars

module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .then((tTfHangars)=>{res.json(tTfHangars)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
createSql:(req,res)=>{
    sql.create(req.body)
    .then((createTtFhangars)=>{res.status(201).json(createTtFhangars)})
    .catch((err)=>{console.log("error in creating sql inputs", err)
    res.status(400).json({message:"Something went wrong in creating all SQL inputs"})
 })
},
getSqlById:(req,res)=>{
    sql.findOne({_id:req.params.id})
    .then((tTfHangar)=>{res.json(tTfHangar)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
updateSql:(req,res)=>{
    sql.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateTtFhangars)=>res.json(updateTtFhangars))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteTtFhangars)=> res.json(deleteTtFhangars))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
}



}
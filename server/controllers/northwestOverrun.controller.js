const sql = require("../models/northwestOverrun.model")

// nwo = northwest overrun


module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .then((nwo)=>{res.json(nwo)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
createSql:(req,res)=>{
    sql.create(req.body)
    .then((createNwo)=>{res.status(201).json(createNwo)})
    .catch((err)=>{console.log(err)
    res.status(400).json(err)
 })
},
getSqlById:(req,res)=>{
    sql.findOne({_id:req.params.id})
    .then((nwo)=>{res.json(nwo)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
updateSql:(req,res)=>{
    sql.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateNwo)=>res.json(updateNwo))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteNwo)=> res.json(deleteNwo))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
}



}
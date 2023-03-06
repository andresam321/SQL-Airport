const OwnersInfo = require("../models/ownersInfo.model")
const sql = require("../models/airRoger.model")


module.exports = {
    createOwnersData:(req,res)=>{
        OwnersInfo.create(req.body)
        .then((create)=>{res.status(201).json(create)})
        .catch((err)=>{console.log(err)
        res.status(400).json(err)
        })
    },
    getOwnersData:(req,res)=>{
        OwnersInfo.find({})
        .then((owners)=>{res.json(owners)})
        .catch((err)=>{console.log("Error", err)
        res.status(400).json(err)
        })
    },
    
}
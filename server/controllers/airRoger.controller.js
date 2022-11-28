const sql = require("../models/airRoger.model")
const jwt = require("jsonwebtoken");
const Owner = require("../models/owners.model")

module.exports ={
getSql:(req,res)=>{
    sql.find({})
    .populate("owners", "fullName email information phoneNumber")
    .then((airRogers)=>{res.json(airRogers)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},

createSql:(req,res)=>{
    const verifyJwt= jwt.verify(req.cookies.usertoken,process.env.SECRET_KEY,{complete:true})  
    sql.create(req.body)
    .then((verifyJwt)=>{res.status(201).json(verifyJwt)})
    .catch((err)=>{console.log(verifyJwt, err)
    res.status(400).json({message:"Something went wrong in creating all SQL inputs"})
 })
},
getSqlById:(req,res)=>{
    sql.findById({_id:req.params.id})
    .populate("owners", "fullName email information phoneNumber")
    .then((airRoger)=>{res.json(airRoger)})
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
// getOwnerByPlaneId:(req,res)=>{
//     sql.findById(req.params.id)
//     .populate("owners", "fullName email information -_id -createdAt -updatedAt")
//     .then((planeId)=>{res.json(planeId)})
//     .catch((err)=>{console.log("error in finding id",err)
//     res.status(400).json({message:"Something went wrong in finding iid"})

//     })

// },
updateSql:(req,res)=>{
    sql.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateAirRoger)=>res.json(updateAirRoger))
    .catch((err)=>{console.log("error in updating inputs",err)
    })
},
deleteSql:(req,res)=>{
    sql.findByIdAndDelete({_id:req.params.id})
    .then((deleteAirRoger)=> res.json(deleteAirRoger))
    .catch((err)=>{console.log("error in deelting sql inputs", err)
    })
},
deleteOwner1:(req,res)=>{
    sql.findById({_id:req.params.id})
    .populate("owners", "fullName email information phoneNumber")
    .then((airRoger)=>{res.json(airRoger)
        {
            $pull: {owners: {_id:req.body.id}}
        }
    })
    .catch((err)=>{console.log("error in getting an sql input")
    res.status(400).json({message:"Something went wrong in finding one put"})
 })
},
deleteTest:(req,res) =>{
    console.log(req.params.id);
    // req.body.airRoger_id =req.params.airRoger_id
    sql.findByIdAndUpdate(req.params.id)
        .then((updateAirRoger)=>{
        console.log("in update")
        console.log(updateAirRoger)
        Owner.findByIdAndDelete(req.params.id,
        {
            $pull: {owners: {_id:req.body.id}},
        },
        console.log(req.body.id),
        {new:true})
        // .populate("user_id")
        .then((deleteOwner)=>{
        // res.json(newOwner)
        res.json(deleteOwner)
        })
        .catch((err)=>{
            console.log("error in finding to tail number")
            console.log(err)
            res.status(400).json(err)
        })
    })
    .catch((err)=>{
        console.log("error in delete")
        console.log(err)
        res.status(400).json(err)
    })

},
deleteTest:(req,res) =>{
    console.log(req.params.id);
    // req.body.airRoger_id =req.params.airRoger_id
    sql.findByIdAndUpdate(req.params.id)
        .then((findSQL)=>{
        console.log("in update")
        console.log(findSQL)
        Owner.findByIdAndDelete(findSQL.airRoger,
        {
            $pull: {airRoger_id: {_id:req.params.id}},
        },
        console.log(airRoger),
        {new:true})
        // .populate("user_id")
        .then((deleteOwner)=>{
        // res.json(newOwner)
        res.json(deleteOwner)
        })
        .catch((err)=>{
            console.log("error in finding to tail number")
            console.log(err)
            res.status(400).json(err)
        })
    })
    .catch((err)=>{
        console.log("error in delete")
        console.log(err)
        res.status(400).json(err)
    })

},
deleteOwner: async(req,res)=>{
    // req.params.id = req.params.owners_id
    try{
        const owner = await sql.findByIdAndUpdate(req.params.id,
            {
                $pull: {owners: {_id:req.params.owners}},
                
            },
             {multi:true, new:true});
            if(!owner) {
                return res.status(400).send("owner not found")
                
            }
        console.log(req.params.id)
        console.log(req.params.owners),
        
        // console.log(owner)
        res.json(owner)

    } catch(err){
        console.log(err)
        res.status(500).send("Something went wrong")
    }
},

}
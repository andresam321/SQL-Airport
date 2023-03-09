const Owner = require("../models/waapOwners.model")
const jwt = require("jsonwebtoken");
const sql = require("../models/airRoger.model")

module.exports ={
// createNewOnwer:(req,res)=>{
//     Owner.create(req.body), req.body.airRoger_id =req.params.airRoger_id
//     .then((createOwner)=>{res.status(201).json(createOwner)})
//     .catch((err)=>{console.log("error in creating owner", err)
//     res.status(400).json({message:"Something went wrong in creating owner"})

// })

    
// },

createOwner:(req,res)=>{
    // const verifyJwt= jwt.verify(req.cookies.usertoken,process.env.SECRET_KEY,{complete:true})  
    Owner.create(req.body)
    .then((create)=>{res.status(201).json(create)})
    .catch((err)=>{console.log( err)
    res.status(400).json(err)
 })
},
getOwners:(req,res)=>{
    Owner.find({})
    // .populate("owners", "fullName email information phoneNumber")
    .then((owners)=>{res.json(owners)})
    .catch((err)=>{console.log("Error in finding airport inputs", err)
    res.status(400).json({message:"Something went wrong in finding airports inputs",err})
 })
},
// createNewOnwer: async(req,res)=>{
//     req.body.airRoger_id =req.params.airRoger_id
//     try{
//         const newOwner= await Owner.create(req.body)
//         res.json(newOwner);

//     } catch(error){
//         res.status(400).json(error)
//     }


// },

createNewOnwer:(req,res) =>{
    console.log(req.body);
    // const owner = new Owner(req.body)
    // const decodedJWT = jwt.decode(req.cookies.usertoken,{complete:true})
    // owner.user_id = decodedJWT.payload._id
    req.body.airRoger_id =req.params.airRoger_id
    Owner.create(req.body)
        .then((newOwner)=>{
        console.log("in create")
        console.log(newOwner)
        sql.findByIdAndUpdate(newOwner.airRoger_id,
        {
            $push:{owners: newOwner._id}
        }, 
        {new:true, useFindAndModify:false})
        .populate("owners", " fullName email information phoneNumber")
        // .populate("user_id")
        .then((updateAirRoger)=>{
        // res.json(newOwner)
        res.json(updateAirRoger)
        })
        .catch((err)=>{
            console.log("error in adding owner to tail number")
            console.log(err)
            res.status(400).json(err)
        })
    })
    .catch((err)=>{
        console.log("error in create")
        console.log(err)
        res.status(400).json(err)
    })

},



//  getAllOwners: async (req,res)=>{
//     try{
//         const allOwners = await Owner.find({}).populate({
//             path: "airRoger_id",
//             model: "AirRoger"
//         }).exec();
//         console.log(allOwners)
//         res.json(allOwners)
//     } catch (err){
//         console.log("error")
//         res.status(400).json(err)
//     }
// },
getAllOwners: (req,res)=>{
    Owner.find({})
    .sort([])
    // .populate("owners")
    .then((allOwners)=>{
        console.log("in all owners")
        res.json(allOwners)
    })
    .catch((err)=>{
        console.log("error found in get all")
        res.status(400).json(err)
    })
},

getOneOwner: async(req,res)=>{
    try{
        const oneOwner = await Owner.findOne({_id:req.params.airRoger_id })
        console.log(oneOwner)
        res.json(oneOwner)
 
    } catch(err){
        console.log("error")
        res.status(400).json(err)
    }
},
// deleteOwner: async(req,res)=>{
//     req.body.airRoger_id =req.params.airRoger_id
//     try{
//         const owner = await Owner.findByIdAndUpdate(req.params.airRoger_id,
//             {
//                 $pull: {airRoger_id: {_id:req.params.id}},
//             },
//             console.log(req.params.id),
//              {new:true});
//             if(!owner) {
//                 return res.status(400).send("owner not found")
//             }
//         console.log(req.params.id)
//         console.log(owner)
//         res.json(owner)

//     } catch(err){
//         console.log("error")
//         res.status(400).json(err)
//     }
// },

// deleteTest:(req,res) =>{
//     console.log(req.params.id);
//     // req.body.airRoger_id =req.params.airRoger_id
//     sql.findByIdAndUpdate(req.params.id)
//         .then((findSQL)=>{
//         console.log("in update")
//         console.log(findSQL)
//         Owner.findByIdAndDelete(req.params.id,
//         {
//             $pull: {"owners": {_id:req.params.id}},
//         },
//         console.log("about to delete"),
//         {new:true})
//         // .populate("user_id")
//         .then((deleteOwner)=>{
//         // res.json(newOwner)
//         res.json(deleteOwner)
//         })
//         .catch((err)=>{
//             console.log("error in finding to tail number")
//             console.log(err)
//             res.status(400).json(err)
//         })
//     })
//     .catch((err)=>{
//         console.log("error in delete")
//         console.log(err)
//         res.status(400).json(err)
//     })

// },
// simpDelete:(req,res)=>{
//     Owner.findByIdAndUpdate({_id:req.params.airRoger_id})
//     console.log(airRoger_id)
//     .then((deleteOne)=> res.json(deleteOne))
//     .catch((err)=>{console.log("error in deelting sql inputs", err)
//     })
// },
// deleteTest2:(req,res) =>{
//     console.log(req.params.id);
//     // req.body.airRoger_id =req.params.airRoger_id
//     Owner.findByIdAndUpdate(req.params.airRoger_id,
//         {
//             $pull: {airRoger_id: {_id:req.params.airRoger_id}},
//         },
//         // console.log(owners),
//         // console.log(owners: {_id:req.params.id}),
//         {new:true})
//         .then((update)=>{
//         res.json(update)
//         })
//         .catch((err)=>{
//             console.log("error in finding to tail number")
//             console.log(err)
//             res.status(400).json(err)
//         })
    
// },
// deleteTest3:(req,res)=>{
//     console.log(req.params.id)
//      Owner.findByIdAndUpdate(req.params.airRoger_id,
//         {
//             $pull: {owners:{_id:req.params.airRoger_id}},
//         },
//         console.log(req.params.id),
//         {new:true})
//         .then((deleteOwner)=>{
//             res.json(deleteOwner)
//         })
//     .catch((err)=>{console.log("error in deelting sql inputs", err)
//     })
// },
// deleteTest4:(req,res)=>{
//     Owner.findByIdAndUpdate(req.params.airRoger_id,
//     {
//         $pull: {owners: {_id:req.params.id}},
//     }
//     .then((deleteOwner)=> {res.json(deleteOwner)
//     })
//     .catch((err)=>{console.log("error in deelting owner inputs", err)
//     })
// },

deleteOwner1: async(req,res)=>{
    // req.params.id = req.params.owners.id
    try{
        const owner = await sql.findByIdAndUpdate(req.params.id,
            {
                $pull: {owners: {_id:req.params.owners.id}},
                
            },
             {multi:true, new:true});
            if(!owner) {
                return res.status(400).send("owner not found")
                
            }
        // console.log(req.params.id)
        // console.log(req.params.owners),
        
        // console.log(owner)
        res.json(owner)

    } catch(err){
        console.log(err)
        res.status(500).send("Something went wrong")
    }
},
deletePLEASE:(req,res)=>{
    Owner.findByIdAndDelete({_id:req.params.owners._id})
    .then((owner)=> res.json(owner))
    .catch((err)=>{console.log("error in deelting owner inputs", err)
    })
},

}
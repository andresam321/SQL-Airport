const mongoose = require("mongoose")

        
const BayRamp = new mongoose.Schema(
    {    
    
        locationOfPlane:{
                type:String,
                // required:[true, "A location is required"]
    
            },
            area:{
                type:String,
                required:[true,"Area is required!"],
                enum:[
                    "Bay Ramp",
                    

                ]
    
            },

            tailNumber:{
                type:String,
                required:[true, "Tail Number required"]
    
            },
     
            airplaneType:{
                type:String,
    
            },
       
            fuelType:{
                type:String,
                required:[true,"Fuel Type Required"],
                enum:["Avgas 100LL","Jet-A","94 unleaded",]
    
            },
        
            fuelOrder:{
                type:String,
                required:[true,"Fuel Order Required"]
    
            },
       
            positivePrist:{
                type:String,
                enum:["Positive", "Negative", "NA"]
    
            },
        
            checkName:{
                type:String,
    
            },
            boxArt:{
                type:String
            },
            user_id:{
                type:mongoose.Schema.Types.ObjectId, 
                ref: "UserSchema"
            },
            owners:[{
                type:mongoose.Schema.Types.ObjectId,
                ref: "owners"
            }]
            
        
            
     
       
            
        
    }, {timestamps:true}
)





const bayRamp  = mongoose.model("BayRamp", BayRamp)
module.exports = bayRamp
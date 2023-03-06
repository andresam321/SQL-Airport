const mongoose = require("mongoose")

        
const HillerAviation = new mongoose.Schema(
    {    
    
        locationOfPlane:{
                type:String,
                // required:[true, "A location is required"]
    
            },
            locationOfPlane:{
                type:String,
                required:[true, "Location is required"]
    
            },

            tailNumber:{
                type:String,
                required:[true,"Tail Number Required"]
    
            },
     
            airplaneType:{
                type:String,
                // required:[true, "Location is required"]
    
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
                enum:["Positive", "Negative", "NA"],
                required:[true,"Required"]
    
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





const hillerAviation  = mongoose.model("HillerAviation", HillerAviation)
module.exports = hillerAviation
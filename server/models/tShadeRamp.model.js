const mongoose = require("mongoose")

        
const TshadesRamp = new mongoose.Schema(
    {    
    
        locationOfPlane:{
                type:String,
                // required:[true, "A location is required"]
    
            },
            area:{
                type:String,
                required:[true,"An area is required!"],
                enum:[
                    "T-Shades",
                    

                ]
    
            },

            tailNumber:{
                type:String,
    
            },
     
            airplaneType:{
                type:String,
    
            },
       
            fuelType:{
                type:String,
                // required:[true,"Must choose a type of fuel, Options:Avgas 100LL","Jet-A","94 unleaded "],
                enum:["Avgas 100LL","Jet-A","94 unleaded",]
    
            },
        
            fuelOrder:{
                type:String,
    
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
        
            
     
       
            
        
    }, {timestamps:true}
)





const tshadesRamp  = mongoose.model("TshadesRamp", TshadesRamp)
module.exports = tshadesRamp
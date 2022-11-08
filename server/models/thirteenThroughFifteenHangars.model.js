const mongoose = require("mongoose")

        
const ThirteenThroughFifteenHangars = new mongoose.Schema(
    {    
    
        locationOfPlane:{
                type:String,
                // required:[true, "A location is required"]
    
            },
            area:{
                type:String,
                required:[true,"An area is required!"],
                enum:[
                    "Hangar 13",
                    "Hangar 14",
                    "Hangar 15",

                ]
    
            },

            hangarThirteem:{
                type:String
            },
            hangarFourteen:{
                type:String
            },
            hangarFifteen:{
                type:String
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





const thirteenThroughFifteenHangars  = mongoose.model("thirteenThroughFifteenHangars", ThirteenThroughFifteenHangars)
module.exports = thirteenThroughFifteenHangars
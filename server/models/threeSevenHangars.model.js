const mongoose = require("mongoose")

        
const ThreeThroughSevenHangars = new mongoose.Schema(
    {    
    
        locationOfPlane:{
                type:String,
                // required:[true, "A location is required"]
    
            },
            area:{
                type:String,
                required:[true,"An area is required!"],
                enum:[
                    "Hangar 3",
                    "Hangar 4",
                    "Hangar 5",
                    "Hangar 6",
                    "Hangar 7",

                    

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





const threeThroughSevenHangars  = mongoose.model("ThreeThroughSevenHangars", ThreeThroughSevenHangars)
module.exports = threeThroughSevenHangars
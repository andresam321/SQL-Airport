const mongoose = require("mongoose")

        
const ExecutiveRamp = new mongoose.Schema(
    {    
    
        // locationOfPlane:{
        //         type:String,
        //         // required:[true, "A location is required"]
    
        //     },
            area:{
                type:String,
                required:[true,"An area is required!"],
                enum:[
                    "Executive Ramp",
                    

                ]
    
            },

            tailNumber:{
                type:String,
    
            },
     
            airplaneType:{
                type:String,
                required:[true,"A Plane Type  is required!"],
    
            },
       
            fuelType:{
                type:String,
                // required:[true,"Must choose a type of fuel, Options:Avgas 100LL","Jet-A","94 unleaded "],
                enum:["Avgas 100LL","Jet-A","94 unleaded",]
    
            },
        
            fuelAmount:{
                type:String,
                required:[true,"An amount is required!"],
    
            },
       
            positivePrist:{
                type:String,
                enum:["Positive", "Negative", "NA"]
    
            },
        
            dateArrived:{
                type:Date,
                required:[true,"A Date is required!"],
    
            },
            timeArrived:{
                type:String,
                required:[true,"A Date is required!"],
    
            },
            rampFeeCost:{
                type:String,
                required:[true,"info Required!"],
            },
        
            
     
       
            
        
    }, {timestamps:true}
)





const executiveRamp  = mongoose.model("ExecutiveRamp", ExecutiveRamp)
module.exports = executiveRamp
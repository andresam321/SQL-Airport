 const mongoose = require("mongoose")


const AirRoger =  new mongoose.Schema(
    {
        // AirRoger:[
        //     AirRoger
            
           
        // ],
        area:{
            type:String,
            // required:[true,"An area is required!"],
            enum:[
                "Air Roger",
            ]

        },
  
            locationOfPlane:{
                type:String,
                // required:[true, "A location is required"]
    
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





const airRoger  = mongoose.model("AirRoger", AirRoger)
module.exports = airRoger
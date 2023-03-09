const mongoose = require("mongoose")

const AirRogerOwners = new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:[true,"name req"]
        },
        email:{
            type:String
        },
        information:{
            type:String
        },
        phoneNumber:{
            type:String
        },
        tailNumber:{
            type:String,
            required:[true,""]
        },
        phoneNumber:{
            type:String,
            required:[true,]

        },
        businessAddress:{
            type:String,

        },
        residentialAddress:{
            type:String,
        },
        paymentType:{
            type:String,
            enum:["Avcard","Visa","MasterCard", "Amex", "Cash","Other"],
            // required:[true,""]

        },
        paymentInfo:{
            type:String,
            required:[true,""]
        },
        notes:{
            type:String,

        },
        airRoger_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "AirRoger",
        },
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserSchema",
        },

    }, {timestamps:true}
)


const airRogerOwners = mongoose.model("AirRogerOwners", AirRogerOwners)
module.exports = airRogerOwners
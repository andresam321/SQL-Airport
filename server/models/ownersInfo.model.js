const mongoose = require("mongoose")

const OwnersInfo = new mongoose.Schema(
    {
        ownersName:{
            type:String,
            required:[true,""]
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
            required:[true,""]

        },
        paymentInfo:{
            type:String,
            required:[true,""]
        },
        notes:{
            type:String,

        }
    }, {timestamps:true}
)

const ownersInfo = mongoose.model("OwnersInfo", OwnersInfo)
module.exports = ownersInfo
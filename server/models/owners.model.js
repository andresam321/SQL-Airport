const mongoose = require("mongoose")

const owners = new mongoose.Schema(
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


const owner = mongoose.model("owners", owners)
module.exports = owner

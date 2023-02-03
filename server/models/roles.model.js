const mongoose = require("mongoose")


const Roles = new mongoose.Schema({
    admin:{
        type:String,
        // enum:[process.env.ADMIN.ROLE]
    },
    supervisor:{
        type:String,
        // enum:[process.env.ADMIN.ROLE]
    },
    basic:{
        type:String,
        // enum:[process.env.ADMIN.ROLE]
    },

})

const roles = mongoose.model("Roles", Roles)
module.exports = roles
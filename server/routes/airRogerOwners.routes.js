const owner = require("../controllers/airRogerOwners.controllers")
// const { authenticate } = require('../config/jwt.config');

module.exports =(app) =>{
    app.post("/api/newOwner", owner.getOwners)
    app.get("/api/owners", owner.getOwners)
    
}
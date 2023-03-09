const owner = require("../controllers/northwestOwners.controllers")
const { authenticate } = require('../config/jwt.config');

module.exports =(app) =>{
    app.post("/api/newOwner", owner.createOwner)
    app.get("/api/owners", owner.getOwners)
}
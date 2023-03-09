const owner = require("../controllers/waapOwners.controllers")
const { authenticate } = require('../config/jwt.config');

module.exports =(app) =>{
    app.post("/api/newOwner", owner.createOwner)
    app.get("/api/owners", owner.getOwners)
    app.get("/api/owner/:id", owner.getOneOwner)
    // app.get("/api/ownersById", owner.getOwnersByPlaneId)
    app.delete("/api/owner/:airRoger_id/:owner_id", owner.deleteOwner1)
   
    app.delete("/api/owners/:id/:owners", owner.deletePLEASE)
}
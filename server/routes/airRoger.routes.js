const sqlController = require("../controllers/airRoger.controller")
const Role = require("../models/user.model")
const { authenticate, authRole } = require('../config/jwt.config');

module.exports = (app) =>{
    app.get("/api/airRogers", sqlController.getSql)
    // app.get("/api/airRogers/owners", sqlController.getOwnerByPlaneId)
    app.post("/api/airRoger",authenticate, sqlController.createSql)
    app.get("/api/airRoger/:id",authenticate, sqlController.getSqlById)
    app.put("/api/airRoger/:id",authenticate, sqlController.updateSql)
    app.delete("/api/airRoger/:id", sqlController.deleteSql)
    app.delete("/api/airRoger/:id/:id", sqlController.deleteOwner)
    app.get("/api/airRoger/:query", sqlController.searchAirRoger)
}
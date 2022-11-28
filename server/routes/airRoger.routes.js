const sqlController = require("../controllers/airRoger.controller")
const { authenticate } = require('../config/jwt.config');

module.exports = (app) =>{
    app.get("/api/airRogers", sqlController.getSql)
    // app.get("/api/airRogers/owners", sqlController.getOwnerByPlaneId)
    app.post("/api/airRoger", sqlController.createSql)
    app.get("/api/airRoger/:id",sqlController.getSqlById)
    app.put("/api/airRoger/:id",sqlController.updateSql)
    app.delete("/api/airRoger/:id", sqlController.deleteSql)
    app.delete("/api/airRoger/:id/:owners", sqlController.deleteOwner)
}
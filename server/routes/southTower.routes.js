const sqlController = require("../controllers/southTower.controller")
const { authenticate } = require('../config/jwt.config');


module.exports = (app) =>{
    app.get("/api/southTower", sqlController.getSql)
    app.post("/api/southTowerArea", sqlController.createSql)
    app.get("/api/southTower/:id", sqlController.getSqlById)
    app.put("/api/southTower/:id", sqlController.updateSql)
    app.delete("/api/southTower/:id", sqlController.deleteSql)
}
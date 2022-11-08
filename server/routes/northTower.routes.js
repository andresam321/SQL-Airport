const sqlController = require("../controllers/northTower.controller")


module.exports = (app) =>{
    app.get("/api/northTower", sqlController.getSql)
    app.post("/api/northTowerArea", sqlController.createSql)
    app.get("/api/northTower/:id", sqlController.getSqlById)
    app.put("/api/northTower/:id", sqlController.updateSql)
    app.delete("/api/northTower/:id", sqlController.deleteSql)
}
const sqlController = require("../controllers/tShadeRamp.controller")

module.exports = (app) =>{
    app.get("/api/tShades", sqlController.getSql)
    app.post("/api/tShadeArea", sqlController.createSql)
    app.get("/api/tShade/:id", sqlController.getSqlById)
    app.put("/api/tShade/:id", sqlController.updateSql)
    app.delete("/api/tShade/:id", sqlController.deleteSql)
}
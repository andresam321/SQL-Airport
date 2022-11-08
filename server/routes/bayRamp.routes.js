const sqlController = require("../controllers/bayRamp.controller")


module.exports = (app) =>{
    app.get("/api/bayRamp", sqlController.getSql)
    app.post("/api/bayRampArea", sqlController.createSql)
    app.get("/api/bayRamp/:id", sqlController.getSqlById)
    app.put("/api/bayRamp/:id", sqlController.updateSql)
    app.delete("/api/bayRamp/:id", sqlController.deleteSql)
}
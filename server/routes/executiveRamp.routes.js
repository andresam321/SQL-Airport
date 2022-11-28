const sqlController = require("../controllers/executiveRamp.controller")


module.exports = (app) =>{
    app.get("/api/executiveRamp", sqlController.getSql)
    app.post("/api/executiveRampArea", sqlController.createSql)
    app.get("/api/executiveRamp/:id", sqlController.getSqlById)
    app.put("/api/executiveRamp/:id", sqlController.updateSql)
    app.delete("/api/executiveRamp/:id", sqlController.deleteSql)
}
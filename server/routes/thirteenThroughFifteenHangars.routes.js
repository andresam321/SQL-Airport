const sqlController = require("../controllers/thirteenThroughFifteenHangars.controller")


module.exports = (app) =>{
    app.get("/api/tTfHangars", sqlController.getSql)
    app.post("/api/tTfHangar", sqlController.createSql)
    app.get("/api/tTfHangar/:id", sqlController.getSqlById)
    app.put("/api/tTfHangar/:id", sqlController.updateSql)
    app.delete("/api/tTfHangar/:id", sqlController.deleteSql)
}
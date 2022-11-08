const sqlController = require("../controllers/skywayHolding.controller")


module.exports = (app) =>{
    app.get("/api/skywayHoldings", sqlController.getSql)
    app.post("/api/skywayHolding", sqlController.createSql)
    app.get("/api/skywayHolding/:id", sqlController.getSqlById)
    app.put("/api/skywayHolding/:id", sqlController.updateSql)
    app.delete("/api/skywayHolding/:id", sqlController.deleteSql)
}
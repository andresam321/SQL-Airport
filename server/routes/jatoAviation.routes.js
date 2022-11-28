const sqlController = require("../controllers/jatoAviation.controller")


module.exports = (app) =>{
    app.get("/api/jatoAviation", sqlController.getSql)
    app.post("/api/jatoAviationArea", sqlController.createSql)
    app.get("/api/jatoAviation/:id", sqlController.getSqlById)
    app.put("/api/jatoAviation/:id", sqlController.updateSql)
    app.delete("/api/jatoAviation/:id", sqlController.deleteSql)
}
const sqlController = require("../controllers/svaHangar.controller")


module.exports = (app) =>{
    app.get("/api/svaHangar", sqlController.getSql)
    app.post("/api/svaHangarArea", sqlController.createSql)
    app.get("/api/svaHangar/:id", sqlController.getSqlById)
    app.put("/api/svaHangar/:id", sqlController.updateSql)
    app.delete("/api/svaHangar/:id", sqlController.deleteSql)
}
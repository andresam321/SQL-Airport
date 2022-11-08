const sqlController = require("../controllers/wingAnPrayer.controller")
// waap = wing an a prayer

module.exports = (app) =>{
    app.get("/api/waap", sqlController.getSql)
    app.post("/api/waapHangar", sqlController.createSql)
    app.get("/api/waap/:id", sqlController.getSqlById)
    app.put("/api/waap/:id", sqlController.updateSql)
    app.delete("/api/waap/:id", sqlController.deleteSql)
}
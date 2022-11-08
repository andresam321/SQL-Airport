const sqlController = require("../controllers/oneTwoHangars.controller")


module.exports = (app) =>{
    app.get("/api/oneTwo", sqlController.getSql)
    app.post("/api/oneTwoArea", sqlController.createSql)
    app.get("/api/oneTwo/:id", sqlController.getSqlById)
    app.put("/api/oneTwo/:id", sqlController.updateSql)
    app.delete("/api/oneTwo/:id", sqlController.deleteSql)
}
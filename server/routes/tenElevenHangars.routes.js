const sqlController = require("../controllers/tenElevenHangars.controller")

// // tte = Ten through eleven 


module.exports = (app) =>{
    app.get("/api/tteHangars", sqlController.getSql)
    app.post("/api/tteHangars", sqlController.createSql)
    app.get("/api/tteHangar/:id", sqlController.getSqlById)
    app.put("/api/tteHangar/:id", sqlController.updateSql)
    app.delete("/api/tteHangar/:id", sqlController.deleteSql)
}
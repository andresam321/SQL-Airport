const sqlController = require("../controllers/eigthNineHangars.controller")


module.exports = (app) =>{
    app.get("/api/eightNineHangars", sqlController.getSql)
    app.post("/api/eightNineHangarsArea", sqlController.createSql)
    app.get("/api/eightNineHangars/:id", sqlController.getSqlById)
    app.put("/api/eightNineHangars/:id", sqlController.updateSql)
    app.delete("/api/eightNineHangars/:id", sqlController.deleteSql)
}
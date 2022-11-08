const sqlController = require("../controllers/transientParking.controller")

module.exports = (app) =>{
    app.get("/api/transientParking", sqlController.getSql)
    app.post("/api/transientParkingArea", sqlController.createSql)
    app.get("/api/transientParking/:id", sqlController.getSqlById)
    app.put("/api/transientParking/:id", sqlController.updateSql)
    app.delete("/api/transientParking/:id", sqlController.deleteSql)
}
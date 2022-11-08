const sqlController = require("../controllers/threeSevenHangars.controller")


module.exports = (app) =>{
    app.get("/api/threeThroughSeven", sqlController.getSql)
    app.post("/api/threeThroughSevenArea", sqlController.createSql)
    app.get("/api/threeThroughSeven/:id", sqlController.getSqlById)
    app.put("/api/threeThroughSeven/:id", sqlController.updateSql)
    app.delete("/api/threeThroughSeven/:id", sqlController.deleteSql)
}
const sqlController = require("../controllers/hillerAviation.controller")


module.exports = (app) =>{
    app.get("/api/hillerAviation", sqlController.getSql)
    app.post("/api/hillerAviationArea", sqlController.createSql)
    app.get("/api/hillerAviation/:id", sqlController.getSqlById)
    app.put("/api/hillerAviation/:id", sqlController.updateSql)
    app.delete("/api/hillerAviation/:id", sqlController.deleteSql)
}
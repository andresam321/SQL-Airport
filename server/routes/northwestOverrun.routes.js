const sqlController = require("../controllers/northwestOverrun.controller")
// nwo = northwest overrun

module.exports = (app) =>{
    app.get("/api/nwo", sqlController.getSql)
    app.post("/api/nwoArea", sqlController.createSql)
    app.get("/api/nwo/:id", sqlController.getSqlById)
    app.put("/api/nwo/:id", sqlController.updateSql)
    app.delete("/api/nwo/:id", sqlController.deleteSql)
}
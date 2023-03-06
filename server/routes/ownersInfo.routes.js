const ownersInfo = require("../controllers/ownersInfo.controller")
// const ROLE = require("../models/user.model")
const { authenticate, authRoles, checkRole } = require('../config/jwt.config');

module.exports = (app) =>{
    app.get("/api/ownersInfo",authenticate, ownersInfo.getOwnersData)
    app.post("/api/ownersInfo", ownersInfo.createOwnersData)
    
}
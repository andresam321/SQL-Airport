const express = require("express");

const app = express()
const PORT = 8000
const cors = require("cors")
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());

require("./config/mongoose.config");
require("./routes/airRoger.routes")(app);
require("./routes/thirteenThroughFifteenHangars.routes")(app);
require("./routes/waapOwner.routes")(app);
require("./routes/wingAnPrayer.routes")(app);
require("./routes/southTower.routes")(app);
require("./routes/northTower.routes")(app);
require("./routes/svaHangar.routes")(app);
require("./routes/tenElevenHangars.routes")(app);
require("./routes/skywayHolding.routes")(app);
require("./routes/hillerAviation.routes")(app);
require("./routes/northwestOverrun.routes")(app);
require("./routes/bayRamp.routes")(app);
// require("./routes/executiveRamp.routes")(app);
require("./routes/jatoAviation.routes")(app);
require("./routes/oneTwoHangars.routes")(app);
require("./routes/skywayHolding.routes")(app);
require("./routes/threeSevenHangars.routes")(app);
require("./routes/transientParking.routes")(app);
require("./routes/tShadeRamp.routes")(app);
require("./routes/eigthNineHangars.routes")(app);
require("./routes/executiveRamp.routes")(app);
require("./routes/user.routes")(app);
require("./routes/ownersInfo.routes")(app);
require("./routes/airRogerOwners.routes")(app);
require("./routes/bayRampOwners.routes")(app);
require("./routes/eightNineOwners.routes")(app);
require("./routes/execRampOwners.routes")(app);
require("./routes/hillerOwners.routes")(app);
require("./routes/jatoAviationOwners.routes")(app);
require("./routes/northTowerOwners.routes")(app);
require("./routes/northwestOwners.routes")(app);
require("./routes/oneTwoOwners.routes")(app);
require("./routes/skywayOwners.routes")(app);
require("./routes/southTowerOwners.routes")(app);
require("./routes/svaOwners.routes")(app);
require("./routes/tenElevenOwners.routes")(app);
require("./routes/thirteenFifteenOwners.routes")(app);
require("./routes/threeSevenOwners.routes")(app);
require("./routes/transientOwners.routes")(app);
require("./routes/tShadeOwners.routes")(app);
require('dotenv').config();
// require('dotenv').controllers(




app.listen(PORT,()=> console.log(`Server is up and running on ${PORT}`))
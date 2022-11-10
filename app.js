const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes/api");
const app = express();

//conect to mongodb
mongoose.connect("mongodb://localhost/portfolio");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//intialiser les routes
app.use("/formation", routes);

app.listen(process.env.port || 4000, function() {
    console.log("Hiii Larine");
});
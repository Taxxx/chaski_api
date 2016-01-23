var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.port || 3000;
var database = require("./config/database");
var app = express();

// configuration ===============================================================
mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

// routes ======================================================================
var userController = require('./app/routes/user');
userController(app);
//require('./app/routes/home.js')(app,arduino_server);

app.get("/", function(req, res){
	res.json({"error" : false, "message" : "hello world"});
});

app.listen(port);
console.log("Listening to PORT "+port);
var express = require("express");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3001;

// Require all models
var db = require("./models");

// Initialize Express
var app = express();

// Configure middleware

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/docupsych", { useNewUrlParser: true });

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
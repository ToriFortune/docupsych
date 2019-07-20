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


// When the server starts, create and save a new Provider document to the db
// The "unique" rule in the Provider model's schema will prevent duplicate Providers from being added to the server
db.Provider.create({ name: "Tori Olley" })
  .then(function(dbProvider) {
    console.log(dbProvider);
  })
  .catch(function(err) {
    console.log(err.message);
  });

  // Routes

// Route for retrieving all Providers from the db

app.get("/provider", function(req,res){
// find all providers
db.Provider.find({})
.then(function(dbProvider){
  // return all Providers if get is successful
  res.json (dbProvider);
})
.catch (function(err){
  // return error message if unsucccesful
  res.json(err);
});

});



// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
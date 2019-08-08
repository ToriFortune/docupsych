const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

// Require all models
const db = require("./models");

// Initialize Express
const app = express();

// Configure middleware

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
if (process.env.NODE_ENV==="production"){
  app.use(express.static("public"));
}


require("./routes/api/login")(app);
// Connect to the Mongo DB
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/docupsych", { useNewUrlParser: true });

const routes = require("./routes")
app.use(routes)
// When the server starts, create and save a new provider, patient, appointment and license document to the db
// The "unique" rule in the Provider model's schema will prevent duplicate Providers from being added to the server
// provider




  // Routes

// Route for retrieving all Providers from the db




// app.get("/provider", function(req,res){
// // find all providers
// db.Provider.find({})
// .then(function(dbProvider){
//   // return all Providers if get is successful
//   res.json (dbProvider);
// })
// .catch (function(err){
//   // return error message if unsucccesful
//   res.json(err);
// });

// });

// // Route for retrieving all Patient from the db

// app.get("/patient", function(req,res){
//   // find all Patients
//   db.Patient.find({})
//   .then(function(dbPatient){
//     // return all Patients if get is successful
//     res.json (dbPatient);
//   })
//   .catch (function(err){
//     // return error message if unsucccesful
//     res.json(err);
//   });
  
//   });
  


//   // Route for retrieving all Appointment from the db

// app.get("/appointment", function(req,res){
//   // find all Appointments
//   db.Appointment.find({})
//   .then(function(dbAppointment){
//     // return all Appointments if get is successful
//     res.json (dbAppointment);
//   })
//   .catch (function(err){
//     // return error message if unsucccesful
//     res.json(err);
//   });
  
//   });

//   // Route for retrieving all License from the db

// app.get("/license", function(req,res){
//   // find all Licenses
//   db.License.find({})
//   .then(function(dbLicense){
//     // return all Licenses if get is successful
//     res.json (dbLicense);
//   })
//   .catch (function(err){
//     // return error message if unsucccesful
//     res.json(err);
//   });
  
//   });
  
//   // Route for retrieving all Administrator from the db

// app.get("/administrator", function(req,res){
//   // find all Patients
//   db.Admistrator.find({})
//   .then(function(dbAdmistrator){
//     // return all Admistrators if get is successful
//     res.json (dbAdmistrator);
//   })
//   .catch (function(err){
//     // return error message if unsucccesful
//     res.json(err);
//   });
  
//   });




// // // Route to get all of model and populate them with their notes
// // app.get("/populateduser", function(req, res) {
// //   // Find all users
// //   db.User.find({})
// //     // Specify that we want to populate the retrieved users with any associated notes
// //     .populate("notes")
// //     .then(function(dbUser) {
// //       // If able to successfully find and associate all Users and Notes, send them back to the client
// //       res.json(dbUser);
// //     })
// //     .catch(function(err) {
// //       // If an error occurs, send it back to the client
// //       res.json(err);
// //     });
// // });


  
// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
const db = require("./models");
const mongoose = require("mongoose");
const moment = require('moment');

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/docupsych", { useNewUrlParser: true });

function AddProvider() {
  db.Provider.create({ name: "Tori Olley" })
    .then(function (dbProvider) {
      // console.log(dbProvider);
    })
    .catch(function (err) {
      // console.log(err.message);
    });
}
// patient

function addPatients() {
  db.Patient.create({
    name: "Jane Jane",
    address: "123 Home Lane",
    email: "myemail@gmail.com",
    phone: "1234567890",
    dob: moment("12-25-1995", "MM-DD-YYYY")
  })
    .then(function (dbPatient) {
      console.log(dbPatient);
    })
    .catch(function (err) {
      console.log(err.message);
    });

  db.Patient.create({
    name: "Suzy Q",
    address: "123 Home Lane",
    email: "myemail@gmail.com",
    phone: "1234567890",
    dob: moment("01-25-1995", "MM-DD-YYYY")
  })
    .then(function (dbPatient) {
       console.log(dbPatient);
    })
    .catch(function (err) {
     console.log(err.message);
    });

  db.Patient.create({
    name: "Jane Doe",
    address: "123 Home Lane",
    email: "myemail@gmail.com",
    phone: "1234567890",
    dob: moment("03-25-1995", "MM-DD-YYYY")
  })
    .then(function (dbPatient) {
      console.log(dbPatient);
      return;
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

// Appointment
function addProviders() {
  db.Appointment.create({ name: "" })
    .then(function (dbAppointment) {
      console.log(dbAppointment);
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

function addLicense() {
  // License
  db.License.create({ name: "" })
    .then(function (dbLicense) {
      console.log(dbLicense);
    })
    .catch(function (err) {
      console.log(err.message);
    });
}
// Administrator

function addAdministrator() {
  db.Administrator.create({ name: "" })
    .then(function (dbAdministrator) {
      console.log(dbAdministrator);
    })
    .catch(function (err) {
      console.log(err.message);
    })
}

addPatients();
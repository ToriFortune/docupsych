db.Provider.create({ name: "Tori Olley"  })
  .then(function(dbProvider) {
    // console.log(dbProvider);
  })
  .catch(function(err) {
    // console.log(err.message);
  });

  // patient
db.Patient.create({ name: "Jane Jane" })
  .then(function(dbPatient) {
    // console.log(dbPatient);
  })
  .catch(function(err) {
    // console.log(err.message);
  });


  // Appointment
  db.Appointment.create({ name: "" })
  .then(function(dbAppointment) {
    console.log(dbAppointment);
  })
  .catch(function(err) {
    console.log(err.message);
  });

// License
db.License.create({ name: "" })
  .then(function(dbLicense) {
    console.log(dbLicense);
  })
  .catch(function(err) {
    console.log(err.message);
  });
// Administrator

  db.Administrator.create({ name: "" })
  .then(function(dbAdministrator) {
    console.log(dbAdministrator);
  })
  .catch(function(err) {
    console.log(err.message);
  });
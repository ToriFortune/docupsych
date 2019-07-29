// Requiring our models
const db = require("../models");

// Routes

app.get("/api/patient", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.userID = req.query.user_id;
    }

    db.Patient.findAll({
        // where: query,
       
      }).then(function(dbpatient) {
        var hbsPatient ={
          patient: dbpatient
        }
        // res.json(dbpatient);
        res.render("allpatient", hbsPatient)
      });
    });
    app.get("/api/patient/:id", function(req, res) {
   
        db.patient.findOne({
          where: {
            id: req.params.id
          },
          include: [db.users]
        }).then(function(dbpatient) {
          res.json(dbpatient);
        });
      });
app.post("/api/patient", function(req, res) {
    db.Patient.create(req.body).then(function(dbpatient) {
      res.json(dbpatient);
    });
  });



// save patient information
  app.post("/api/patient", function(req, res) {
    db.patient.create(req.body).then(function(dbpatient) {
      res.json(dbpatient);
    });
  });



   // DELETE route for deleting patient
   app.delete("/api/patient/:id", function(req, res) {
    db.patient.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbpatient) {
      res.json(dbpatient);
    });
  });


//   update patient information

app.put("/api/patient", function(req, res) {
    db.patient.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbpatient) {
      res.json(dbpatient);
    });
  });


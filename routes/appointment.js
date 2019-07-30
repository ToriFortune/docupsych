// Requiring our models
const db = require("../models");

// Routes

app.get("/api/appointment", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.userID = req.query.user_id;
    }

    db.Appointment.findAll({
        // where: query,
       
      }).then(function(dbappointment) {
        var hbsAppointment ={
          appointment: dbappointment
        }
        // res.json(dbappointment);
        res.render("allappointment", hbsAppointment)
      });
    });
    app.get("/api/appointment/:id", function(req, res) {
   
        db.appointment.findOne({
          where: {
            id: req.params.id
          },
          include: [db.users]
        }).then(function(dbappointment) {
          res.json(dbappointment);
        });
      });
app.post("/api/appointment", function(req, res) {
    db.Appointment.create(req.body).then(function(dbappointment) {
      res.json(dbappointment);
    });
  });



// save appointments
  app.post("/api/appointment", function(req, res) {
    db.Appointment.create(req.body).then(function(dbappointment) {
      res.json(dbappointment);
    });
  });



   // DELETE route for deleting appointment
   app.delete("/api/appointment/:id", function(req, res) {
    db.appointment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbappointment) {
      res.json(dbappointment);
    });
  });


//   update appointment

app.put("/api/appointment", function(req, res) {
    db.appointment.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbappointment) {
      res.json(dbappointment);
    });
  });


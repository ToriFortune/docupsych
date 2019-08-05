
// Requiring our models
const db = require("../../models");
const app = ("express");
const express = require ("express");
// Routes

app.get("/api/license", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.userID = req.query.user_id;
    }

    db.License.findAll({
        // where: query,
       
      }).then(function(dblicense) {
        var hbsLicense ={
          license: dblicense
        }
        // res.json(dblicense);
        res.render("alllicense", hbsLicense)
      });
    });
    app.get("/api/license/:id", function(req, res) {
   
        db.license.findOne({
          where: {
            id: req.params.id
          },
          include: [db.users]
        }).then(function(dblicense) {
          res.json(dblicense);
        });
      });
app.post("/api/license", function(req, res) {
    db.License.create(req.body).then(function(dblicense) {
      res.json(dblicense);
    });
  });



// save license information
  app.post("/api/license", function(req, res) {
    db.license.create(req.body).then(function(dblicense) {
      res.json(dblicense);
    });
  });



   // DELETE route for deleting license
   app.delete("/api/license/:id", function(req, res) {
    db.license.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dblicense) {
      res.json(dblicense);
    });
  });


//   update license information

app.put("/api/license", function(req, res) {
    db.license.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dblicense) {
      res.json(dblicense);
    });
  });


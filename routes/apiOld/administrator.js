// Requiring our models
const db = require("../../models");
const app = ("express");
// const router= require("express").Router
// const express = require ("express");
// Routes

app.get("/api/administrator/:id", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.userID = req.query.user_id;
    }

    db.Administrator.findAll({
        // where: query,
       
      }).then(function(dbadministrator) {
        var hbsAdministrator ={
          administrator: dbadministrator
        }
        // res.json(dbadministrator);
        res.render("alladministrator", hbsAdministrator)
      });
    });
    app.get("/api/administrator/:id", function(req, res) {
   
        db.administrator.findOne({
          where: {
            id: req.params.id
          },
          include: [db.users]
        }).then(function(dbadministrator) {
          res.json(dbadministrator);
        });
      });
app.post("/api/administrator", function(req, res) {
    db.Administrator.create(req.body).then(function(dbadministrator) {
      res.json(dbadministrator);
    });
  });



// save administrators
  app.post("/api/administrator", function(req, res) {
    db.Administrator.create(req.body).then(function(dbadministrator) {
      res.json(dbadministrator);
    });
  });



   // DELETE route for deleting administrator
   app.delete("/api/administrator/:id", function(req, res) {
    db.administrator.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbadministrator) {
      res.json(dbadministrator);
    });
  });


//   update administrator

app.put("/api/administrator", function(req, res) {
    db.administrator.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbadministrator) {
      res.json(dbadministrator);
    });
  });


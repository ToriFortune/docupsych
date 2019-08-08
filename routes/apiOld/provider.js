// Requiring our models
const db = require("../../models");
const app = ("express");
const express = require ("express");
// Routes

app.get("/api/provider", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.userID = req.query.user_id;
    }

    db.Provider.findAll({
        // where: query,
       
      }).then(function(dbprovider) {
        var hbsProvider ={
          provider: dbprovider
        }
        // res.json(dbprovider);
        res.render("allprovider", hbsProvider)
      });
    });
    app.get("/api/provider/:id", function(req, res) {
   
        db.provider.findOne({
          where: {
            id: req.params.id
          },
          include: [db.users]
        }).then(function(dbprovider) {
          res.json(dbprovider);
        });
      });
app.post("/api/provider", function(req, res) {
    db.Provider.create(req.body).then(function(dbprovider) {
      res.json(dbprovider);
    });
  });



// save provider information
  app.post("/api/provider", function(req, res) {
    db.provider.create(req.body).then(function(dbprovider) {
      res.json(dbprovider);
    });
  });



   // DELETE route for deleting provider
   app.delete("/api/provider/:id", function(req, res) {
    db.provider.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbprovider) {
      res.json(dbprovider);
    });
  });


//   update provider information

app.put("/api/provider", function(req, res) {
    db.provider.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbprovider) {
      res.json(dbprovider);
    });
  });


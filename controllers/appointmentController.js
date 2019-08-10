const db = require("../models");

// Defining methods for the AppointmentsController
module.exports = {
  findAll: function(req, res) {
    db.Appointment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Appointment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Appointment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Appointment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Appointment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};




// var mongoose = require('mongoose');
// var Appointment = mongoose.model('Appointment');
// module.exports = (function(){
// 	return{
// 		show: function(req, res){
// 			var d = new Date();
// 			var datey = d.setDate(d.getDate() - 1);
// 			console.log('in the controller');
// 			Appointment.find({scheduled_date: {$gte: datey}}, function(err, appts){
// 				if(err){
// 					console.log('error fetching appointments');
// 				}else{
// 					res.json(appts);
// 				}
// 			})
// 		},
// 		add: function(req, res){
// 			console.log('in the add controller');
// 			var appointment = new Appointment({name: req.body.name, complain: req.body.complain, scheduled_time: req.body.scheduled_time, scheduled_date:req.body.scheduled_date });
// 			appointment.save(function(err){
// 				if(err){
// 					console.log('unable to add appt');
// 				}else{
// 					console.log('appt creation successful');
// 					res.redirect('/appointments');
// 				}
// 			})
// 		},
// 		remove: function(req, res){
// 			Appointment.remove({_id: req.params.id}, function(err, appt){
// 				if(err){
// 					console.log('unable to delete');
// 				}else{
// 					console.log('deleted appt');
// 					res.redirect('/appointments');
// 				}
// 			})
// 		}
// 	}
// })();
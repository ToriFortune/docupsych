var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AppointmentSchema = new Schema({
    
    provider:{
       type: Schema.Types.ObjectId,
       ref: "Provider"
    },
    patient:{
        type: Schema.Types.ObjectId,
        ref: "Patient"
     },
     
    dateTime: {
        type: Date,
        required: true
    },
    
    // date: {
    //     type: Date,
    //     required: true
    // },
    apptConfirmed: {
        type: Boolean,
        required: true
    }



});

// // This creates our model from the above schema, using mongoose's model method
// var Appointment = mongoose.model("Appointment", AppointmentSchema);

// // Export the Appointment model
// 
module.exports = AppointmentSchema
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const PatientSchema = new Schema({
  // `name` must be unique and of type String
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  // image:{
  //   data:Buffer,
  //   contentType: String,
  //   required:true
  // },
  address1: {
    type: String,
    required: true
  },
  address2: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  dob: {
      type: Date,
    required: true
  },
  email: {
      type: String,
      required: false
  },
  phone: {
    type: String,
    required: true
  },
  sex: {
      type: String,
      required: true
  },
  provider: {
      type: String,
      ref: "Provider"
  },
    diagnosis: {
        type: Array
    },
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Appointment"
        }
    ],
});

// This creates our model from the above schema, using mongoose's model method
const Patient = mongoose.model("Patient", PatientSchema);

// Export the Patient model
module.exports = Patient;

var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var PatientSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String,
    required: true
  },
  address: {
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
      type: Boolean,
      required: true
  },
  provider: {
      type: Schema.Types.ObjectId,
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
var Patient = mongoose.model("Patient", PatientSchema);

// Export the Patient model
module.exports = Patient;

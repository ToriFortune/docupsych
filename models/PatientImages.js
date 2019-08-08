const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ImageSchema = new Schema({
  // `name` must be unique and of type String
  img: 
      { data: Buffer, contentType: String }
});

// This creates our model from the above schema, using mongoose's model method
constPatientImage = mongoose.model("Patient", ImageSchema);

// Export the Patient model
module.exports = Patient;

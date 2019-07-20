var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var LicenseSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String,
    required: true
  },
// 
  
//   current: {
//     type: Boolean,
//     required: true
// },

  supervisionReq: {
      type: Boolean,
      required: true,
  },

});

// // This creates our model from the above schema, using mongoose's model method
// var License = mongoose.model("License", LicenseSchema);

// // Export the License model
// 
module.exports = LicenseSchema
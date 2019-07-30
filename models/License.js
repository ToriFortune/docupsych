var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var LicenseSchema = new Schema({
  // `name` must be unique and of type String
  name: {
    type: String,
    required: false
  },
// 
  
//   current: {
//     type: Boolean,
//     required: false
// },

  supervisionReq: {
      type: Boolean,
      required: false,
  },

});

// // This creates our model from the above schema, using mongoose's model method
var License = mongoose.model("License", LicenseSchema);

// // Export the License model
// 
module.exports = License
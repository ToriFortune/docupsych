var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ProviderSchema = new Schema({
    // `name` must be unique and of type String
    firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
    // 
    //   activeLicense: {
    //       type: Boolean,
    //     required: false
    //   },
    issueDate: {
        type: Date,
        required: false
    },
    expireDate: {
        type: Date,
        required: false

    },
    issueState: {
      type: String,
      required: false
    },
    phone:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    license: {
        type: String,
        ref: "License"
    },
    
    //   supervisionReq: {
    //     type: Boolean,
    //     required: false
    // },

    // if supervision is required, the provider should have an attached supervisor with an id in the database:
    supervisor: {
        type: String,
        ref: "Supervisor"
    },



});

// // This creates our model from the above schema, using mongoose's model method
var Provider = mongoose.model("Provider", ProviderSchema);

// // Export the Provider model
// 
module.exports = Provider
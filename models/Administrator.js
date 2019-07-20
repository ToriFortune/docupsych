var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AdministratorSchema = new Schema({
    // `name` must be unique and of type String
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
    // 
    //   activeLicense: {
    //       type: Boolean,
    //     required: true
    //   },
    // activeDate: {
    //     type: Date,
    //     required: true
    // },
    // expireDate: {
    //     type: Date,
    //     required: true

    // },
    // issueState: {
    //   type: String,
    //   required: true
    // },
    // license: {
    //     type: Schema.Types.ObjectId,
    //     ref: "License"
    // },
    
    // //   supervisionReq: {
    // //     type: Boolean,
    // //     required: true
    // // },

    // // if supervision is required, the Administrator should have an attached supervisor with an id in the database:
    // supervisor: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Supervisor"
    // },



});

// // This creates our model from the above schema, using mongoose's model method
// var Administrator = mongoose.model("Administrator", AdministratorSchema);

// // Export the Administrator model
// 
module.exports = AdministratorSchema
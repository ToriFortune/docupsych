var mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
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

  license: {
    type: String,
    ref: "License"
  },
  password: {
    type: String,
    required: false
  },
  issueState: {
    type: String,
    required: false
  },
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

  phone: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
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
// Define schema methods
ProviderSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
ProviderSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/provider.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/provider.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})
// // This creates our model from the above schema, using mongoose's model method
var Provider = mongoose.model("Provider", ProviderSchema);

// // Export the Provider model
// 
module.exports = Provider
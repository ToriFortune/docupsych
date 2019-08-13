const db = require("../models")
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		db.Provider.findOne({ email: email }, (err, provider) => {
			if (err) {
				return done(err)
			}
			if (!provider) {
				return done(null, false, { message: 'Incorrect email' })
			}
			if (!provider.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, provider)
		})
	}
)

module.exports = strategy
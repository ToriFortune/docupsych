const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const db = require('../models')

// called on login, saves the id to session req.session.passport.provider = {id:'..'}
passport.serializeUser((provider, done) => {
	console.log('*** serializeUser called, provider: ')
	console.log(provider) // the whole raw provider object!
	console.log('---------')
	done(null, { _id: provider._id })
})

// provider object attaches to the request as req.provider
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	db.Provider.findOne(
		{ _id: id },
		'email',
		(err, provider) => {
			console.log('*** Deserialize provider, provider:')
			console.log(provider)
			console.log('--------------')
			done(null, provider)
		}
	)
})

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport
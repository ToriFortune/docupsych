var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a email and password
passport.use(new LocalStrategy(
  // Our provider will sign in using an email, rather than a "providername"
  {
    usernameField: 'email'
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    console.log(`User email : ${email}`)
    console.log("Working")
    db.Provider.findOne({
      where: {
        email: email
      }
    }).then(function(dbProvider) {
      // If there's no Provider with the given email
      console.log('passport.js', dbProvider)
      if (!dbProvider) {
        // console.log('test');
        console.log('passport.js', dbProvider)

        return done(null, false, {
          message: "Incorrect information."
        });
      }
      // If there is a Provider with the given email, but the password the Provider gives us is incorrect
      else if (!dbProvider.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the Provider
      return done(null, dbProvider);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// the db needs to serialize and deserialize the Provider
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(provider, cb) {
  cb(null, provider);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;


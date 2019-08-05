// const db =require ("../models");
const passport= require("../../config/passport");

module.exports=function(app){
    app.post("/api/login", 
    passport.authenticate("local", {failureMessage: "Incorrect username or password"}), 
    function(req, res) {
   
        console.log("hi")
        console.log(req.user);
        res.json(req.user.id);
      });
}


// app.post('/login/signup', function(req,res){
//     console.log(req.body);

// }
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });
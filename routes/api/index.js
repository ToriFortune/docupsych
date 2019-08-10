const router = require("express").Router();
const providerRoutes = require("./provider");
const patientRoutes = require("./patient");
const appointmentRoutes = require("./appointment");
const loginRoutes = require ("./login");
// Provider, appt and patient routes
router.use("/provider", providerRoutes);
router.use("/patient", patientRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/login", loginRoutes);

if(process.env.NODE_ENV === "production") {
  // If no API routes are hit, send the React app
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}


module.exports = router;
const router = require("express").Router();
const providerRoutes = require("./provider");

const patientRoutes = require("./patient");
const appointmentRoutes = require("./appointment");

// Provider routes
router.use("/provider", providerRoutes);
router.use("/patient", patientRoutes);
router.use("/appointment", appointmentRoutes);


module.exports = router;
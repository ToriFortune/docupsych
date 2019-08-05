const router=require("express");
const patientRoutes = require("./patient");
const appointmentRoutes = require("./appointment");
const licenseRoutes = require("./license");
const providerRoutes = require("./provider");
const administratorRoutes = require("./administrator")


// patient routes
router.use("/patients", patientRoutes);


// provider routes
router.use("/provider", providerRoutes);

// administrator routes
router.use("/adminstrar", administratorRoutes);

// license route
router.use("/license", licenseRoutes );

// // appointment routes
router.use("/appointment",appointmentRoutes);
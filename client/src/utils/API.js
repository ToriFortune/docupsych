import axios from "axios";



export default {
  // Gets all patient
  getPatients: function() {
    return axios.get("/api/patient");
  },
  // Gets the patient with the given id
  getPatient: function(id) {
    return axios.get("/api/patient/" + id);
  },
  // Deletes the patient with the given id
  deletePatient: function(id) {
    return axios.delete("/api/patient/" + id);
  },
  // Saves a patient to the database
  savePatient: function(patientData) {
    return axios.post("/api/patient", patientData);
  },

   // Gets all 
  getProviders: function() {
    return axios.get("/api/provider");
  },
  // Gets the provider with the given id
  getProvider: function(id) {
    return axios.get("/api/provider/" + id);
  },
  // Deletes the provider with the given id
  deleteProvider: function(id) {
    return axios.delete("/api/provider/" + id);
  },
  // Saves a provider to the database
  saveProvider: function(providerData) {
    return axios.post("/api/provider", providerData);
  },


  
   // Gets all appointments
   getAppointments: function() {
    return axios.get("/api/appointment");
  },
  // Gets the appointment with the given id
  getAppointment: function(id) {
    return axios.get("/api/appointment" + id);
  },
  // Deletes the appointment with the given id
  deleteAppointment: function(id) {
    return axios.delete("/api/appointment/" + id);
  },
  // Saves an appointment to the database
  saveAppointment: function(appointmentData) {
    return axios.post("/api/appointment", appointmentData);
  },

  
   
};
import axios from "axios";



export default {
  // Gets all patient
  getPatients: function() {
    return axios.get("/api/patient");
  },
  // Gets the book with the given id
  getPatient: function(id) {
    return axios.get("/api/patient/" + id);
  },
  // Deletes the book with the given id
  deletePatient: function(id) {
    return axios.delete("/api/patient/" + id);
  },
  // Saves a book to the database
  savePatient: function(patientData) {
    return axios.post("/api/patient", patientData);
  }
};
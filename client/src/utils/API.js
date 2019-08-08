import axios from "axios";


export default {
  // Gets all books
  getPatients: function() {
    return axios.get("/api/patient");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/patients/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/patients/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/patients", bookData);
  }
};
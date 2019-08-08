import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import API from "../utils/API";
import moment from "moment"

class Patients extends Component {
  state = {
    patients: [],
  };

  componentDidMount() {
    this.loadPatients();
  }

  loadPatients = () => {
    API.getPatients()
      .then(res =>
        this.setState({ patients: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deletePatient = id => {
    API.deletePatient(id)
      .then(res => this.loadPatients())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.savePatient({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadPatients())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Table responsive="xl">
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Primary Provider</th>
            <th>Primary Diagnosis</th>

          </tr>
        </thead>
        <tbody>
        {this.state.patients.length ? 
          this.state.patients.map((patient, i)=>{
            return (
              <tr>
                <td>{i+1}</td>
                <td>{patient.name}</td>
                <td>{moment(patient.dob).format("MM-DD-YYYY")}</td>
                <td>{patient.sex}</td>
                <td>{patient.address}</td>
                <td>{patient.phone}</td>
                <td></td>
                <td></td>
              </tr>
            )
          })
         : (
          <tr>No Results to Display</tr>
        )}
          
        </tbody>
      </Table>
)
  }
};

export default Patients;
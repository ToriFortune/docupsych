import React, { Component } from "react";
import { Table, Card, Accordion } from 'react-bootstrap';
import API from "../utils/API";
import moment from "moment";
import { toast } from 'react-toastify';
import NewPatientForm from "../component/NewPatientForm";

class Patients extends Component {
  state = {
    patients: [],
    providers: [],
    form: {
      firstName: "",
      lastName: "",
    }
  };

  componentDidMount() {
    this.loadPatients();
  }

  clearForm() {
    let emptyForm = this.state.form;
    for (let prop in emptyForm) {
      emptyForm[prop] = "";
    }
    this.setState({ form: emptyForm })
  }

  loadPatients = () => {
    API.getPatients()
      .then(resPatient => {
        API.getProviders()
          .then(resProvider => {
            this.setState({ 
              patients: resPatient.data,
              providers: resProvider.data
            })
          })
      })
      .catch(err => console.log(err));
  };

  deletePatient = id => {
    API.deletePatient(id)
      .then(res => this.loadPatients())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({
      form
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    ///check that all inputs have data
    const form = this.state.form;
    let validData = true;
    for (let prop in form) {
      if (form[prop] === "") {
        validData = false
        toast.error("all fields are required");
        return
      }
      
    }

    if (validData) {
      API.savePatient(this.state.form)
        .then(res => {
          this.loadPatients();
          this.clearForm();
          toast.success("patient successfully added to list")
        })
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Add New Patient
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <NewPatientForm
                inputChange={this.handleInputChange}
                submit={this.handleFormSubmit}
                form={this.state.form}
                providers={this.state.providers}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Current Patient List
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
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
                    this.state.patients.map((patient, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{`${patient.lastName}, ${patient.firstName}`}</td>
                          <td>{moment(patient.dob).format("MM-DD-YYYY")}</td>
                          <td>{patient.sex}</td>
                          <td>{patient.address}</td>
                          <td>{patient.phone}</td>
                          <td>{patient.provider}</td>
                          <td>{patient.diagnosis}</td>
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
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    )
  }
};

export default Patients;
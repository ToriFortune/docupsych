
import React, { Component } from "react";
import { Card, Accordion } from 'react-bootstrap';
import API from "../utils/API";
import moment from "moment";
import NewApptForm from "../component/NewApptForm";
import { Redirect } from "react-router-dom";




class Appointment extends Component {
  state = {
    appointment: [],
    form: {
      apptDate: "",
    },
    patientID: "",
    patientName: "",
  };

  componentDidMount() {
    this.setState({ patientID: this.props.match.params.id });
    this.loadAppointment(this.props.match.params.id);
  }

  loadAppointment = (id) => {
    API.getAppointment(id)
      .then(res =>
        this.setState({
          appointment: res.data.appointments,
          provider: "",
          patient: res.data.patientName,
          apptDate: "",
          apptTime: "",
          apptConfirmed: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteAppointment = id => {
    API.deleteAppointment(id)
      .then(res => this.loadAppointment())
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
        alert("all fields are required")
        return
      }
      // if (prop === "apptDate"){
      //   const d8 = moment(form[prop]).format("MM/DD/YYYY");
      //   form[prop] = d8
      // }
    }

    if (validData) {
      form.patient = this.state.patientID;
      console.log(form);
      API.saveAppointment(form)
        .then(res => this.loadAppointment(form.patient))
        .catch(err => console.log(err));
    }
  };

  render() {
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
      return <Redirect to="/" />;
    }
    return (
      <Accordion defaultActiveKey="0">
        <Card>

          <Accordion.Toggle as={Card.Header} eventKey="0">
            Session Documentation
      </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <NewApptForm
                patient={this.state.patient}
                form={this.state.form}
                inputChange={this.handleInputChange}
                submit={this.handleFormSubmit}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* <Card>
  
      <Accordion.Toggle as={Card.Header} eventKey="1">
    CLICK
      </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="1">
      <Card.Body>CLICK</Card.Body>
    </Accordion.Collapse>
  </Card> */}
      </Accordion>
    )
  }
};

export default Appointment;
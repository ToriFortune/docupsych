// import React from "react";
// import { Form,Button  } from "react-bootstrap"
import React, { Component } from "react";
import { Card, Accordion } from 'react-bootstrap';
import API from "../utils/API";
// import moment from "moment";
import NewApptForm from "../component/NewApptForm";
// const moment = require('moment');
// moment().format();
// const Appointments = () => (
//     <div className="wrapper">
//     <Form>
//     <Form.Group controlId="formBasicPassword">
//     <label for="comment">Note Entry</label>
//     <textarea className="form-control" rows = "5" id ="comment"></textarea>
//           {/* <Form.Control type="password" placeholder="Password" /> */}
//         </Form.Group>
        
//         <Button variant="primary" type="submit">
//           Submit Note
//         </Button>
    
//       </Form>
//   </div>
//   );
  
//   export default Appointments;



  
class Appointment extends Component {
  state = {
    appointment: [],
    form: {
      apptDate: "",
      apptTime: "",
    }
  };

  componentDidMount() {
    this.loadAppointment();
  }

  loadAppointment = () => {
    API.getAppointment()
      .then(res =>
        this.setState({ appointment: res.data, provider: "", patient: "", apptDate: "", apptTime: "", apptConfirmed: "" })
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
      if (prop === "email" && form[prop].indexOf("@phendnnetwork.org") < 0) {
        alert("must have Phend Network email")
        return
      }
    }

    if (validData) {
      API.saveAppointment(this.state.form)
        .then(res => this.loadAppointment())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Accordion defaultActiveKey="0">
      <Card>
  
      <Accordion.Toggle as={Card.Header} eventKey="0">
      Session Documentation
      </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="0">
    <Card.Body>
      <NewApptForm  
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
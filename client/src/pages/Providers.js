// import React from "react";
// import { Form,Button  } from "react-bootstrap"

// const Providers = () => (
//   <div className="wrapper">
//   <Form>
//   <Form.Group controlId="formBasicPassword">
//   <label for="comment">Note Entry</label>
//   <textarea className="form-control" rows = "5" id ="comment"></textarea>
//         {/* <Form.Control type="password" placeholder="Password" /> */}
//       </Form.Group>
      
//       <Button variant="primary" type="submit">
//         Submit Note
//       </Button>
  
//     </Form>
// </div>
// );

// export default Providers;


import React, { Component } from "react";
import { Table, Card, Accordion } from 'react-bootstrap';
import API from "../utils/API";
import moment from "moment";
import NewProviderForm from "../component/NewProviderForm";

class Provider extends Component {
  state = {
    provider: [],
    form: {
      firstName: "",
      lastName:"",
    }
  };

  componentDidMount() {
    this.loadPatients();
  }

  loadPatients = () => {
    API.getPatients()
      .then(res =>
        this.setState({ provider: res.data, name: "", address: "", dob: "", phone: "", sex: "", provider: "", diagnosis: "" })
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
    let form = this.state.form;
    form[name] =value;
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
      if (form[prop] === ""){
        validData = false
        alert("all fields are required")
        return
      }
      if (prop === "email" && form[prop].indexOf("@phendnnetwork.org") < 0 ){
        alert("must have Phend Network email")
        return
      }
    }

    if (validData) {
      API.savePatient(this.state.form)
        .then(res => this.loadPatients())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Add New Provider
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <NewProviderForm
                inputChange={this.handleInputChange}
                submit={this.handleFormSubmit}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Current Provider List
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Table responsive="xl">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>provider Name</th>
                    <th>License Type</th>
                    <th>Issuing State</th>
                    <th>Active </th>
                    <th>Expires</th>
                    <th>Supervisor</th>
                   

                  </tr>
                </thead>
                <tbody>
                  {this.state.provider.length ?
                    this.state.provider.map((provider, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{`${provider.lastName}, ${provider.firstName}`}</td>
                          <td>{moment(provider.dob).format("MM-DD-YYYY")}</td>
                          <td>{provider.sex}</td>
                          <td>{provider.address}</td>
                          <td>{provider.phone}</td>
                          <td>{provider.provider}</td>
                          <td>{provider.diagnosis}</td>
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

export default Provider;
import React, { Component } from "react";
import { Table, Card, Accordion } from 'react-bootstrap';
import API from "../utils/API";
import moment from "moment";
import NewProviderForm from "../component/NewProviderForm";
import { toast } from 'react-toastify';
import Forms from "../utils/forms"
import {Redirect} from "react-router-dom";

class Provider extends Component {
  state = {
    provider: [],
    form: Forms.newProvider
  };

  componentDidMount() {
    this.loadProvider();
  }

  clearForm() {
    let emptyForm = this.state.form;
    for (let prop in emptyForm) {
      emptyForm[prop] = "";
    }
    this.setState({ form: emptyForm })
  }

  loadProvider = () => {
    API.getProviders()
      .then(res =>
        this.setState({ provider: res.data, name: "", activeDate: "", expireDate: "", issueDate: "", license: "", supervisor: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProvider = id => {
    API.deleteProvider(id)
      .then(res => this.loadProvider())
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
        toast.error("all fields are required")
        return
      }
      if (prop === "email" && form[prop].indexOf("@phendnetwork.org") < 0) {
        toast.error("must have Phend Network email")
        return
      }
    }

    if (validData) {
      API.saveProvider(this.state.form)
        .then(res => {
          this.loadProvider();
          this.clearForm();
          toast.success("patient successfully added to list")
        })
        .catch(err => console.log(err));

    }
  };

  render() {
    // if (sessionStorage.getItem("isLoggedIn") !== "true"){
    //   return <Redirect to="/"/>;
    // }
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
                form={this.state.form}
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
                    <th>Active </th>
                    <th>Expires</th>
                    <th>Issuing State</th>
                    <th>License Type</th>
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
                          <td>{moment(provider.activeDate).format("MM-DD-YYYY")}</td>
                          <td>{moment(provider.expireDate).format("MM-DD-YYYY")}</td>
                          <td>{provider.issueState}</td>
                          <td>{provider.license}</td>
                          <td>{provider.supervisor}</td>

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
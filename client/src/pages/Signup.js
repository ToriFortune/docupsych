import React, { Component } from "react";
import { Form, Col, Card } from "react-bootstrap"
import { Input, FormBtn, Select } from "../component/FormInput";
import { toast } from 'react-toastify';
import API from "../utils/API";
import stateList from "../utils/states"
import "./Signup.css"



class Signup extends Component {
    state = {
        form: {}
    }

    clearForm() {
        let emptyForm = this.state.state.form;
        for (let prop in emptyForm) {
            emptyForm[prop] = "";
        }
        this.setState({ form: emptyForm })
    }

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
            if (prop === "email" && form[prop].indexOf("@phendnetwork.org") < 0) {
                toast.error("must have Phend Network email")
                return
            }

        }

        if (validData) {
            API.saveProvider(this.state.form)
                .then(res => {

                    this.clearForm();
                    toast.success(`${form.firstName}, has successfully signed up!`)
                })
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Card>
                <Card.Body>
                    <Form className="signUp">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>First Name</Form.Label>
                                <Input
                                    name="firstName"
                                    value={this.state.form.firstName}
                                    type="text"
                                    placeholder="Enter First Name"
                                    onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Last Name</Form.Label>
                                <Input
                                    name="lastName"
                                    value={this.state.form.lastName}
                                    type="text"
                                    placeholder="Enter Last Name"
                                    onChange={this.handleInputChange} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridIssueDate">
                                <Form.Label>Issue Date</Form.Label>
                                <Input
                                    name="issueDate"
                                    value={this.state.form.issueDate}
                                    type="date"
                                    placeholder="Date of Issue"
                                    onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridexpireDate">
                                <Form.Label>Expiration Date</Form.Label>
                                <Input
                                    name="expireDate"
                                    value={this.state.form.expireDate}
                                    type="date"
                                    placeholder="Expiration Date"
                                    onChange={this.handleInputChange} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridLicenseType">
                                <Form.Label>License Type</Form.Label>
                                <Select
                                    name="license"
                                    value={this.state.form.license}
                                    onChange={this.handleInputChange}>
                                    <option>Choose...</option>
                                    <option value="lcsw-c">LCSW-C</option>
                                    <option value="	lcsw">LCSW</option>
                                    <option value="	lmsw">LMSW</option>
                                    <option value="	lcpc">LCPC</option>
                                    <option value="lps">LPC</option>
                                </Select>
                            </Form.Group>
                      
                        <Form.Group as={Col} controlId="formGridissueSate">
                            <Form.Label>Issuing State</Form.Label>
                            <Select
                                name="state"
                                value={this.state.form.state}
                                onChange={this.handleInputChange}>
                                <option>Choose...</option>
                                {stateList.map((state => {
                                    return <option>{state}</option>
                                }))}
                                <option>Other</option>
                            </Select>
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>E-Mail</Form.Label>
                                <Input
                                    name="email"
                                    value={this.state.form.email}
                                    type="text"
                                    placeholder="email"
                                    onChange={this.handleInputChange} />
                                <Form.Text className="text-muted">
                                    Enter Phend Network email address.
                                 </Form.Text>
                                 </Form.Group>
                                 <Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Input
                  name="password"
                  value={this.state.form.password}
                  type="password"
                  placeholder="password"
                  onChange={this.handleInputChange} />
                                <Form.Text className="text-muted">
                  Password must be longer than six characters
                           </Form.Text>
              </Form.Group>


                            
                        </Form.Row>

                       

                        <Form.Group>
                            <Form.Row>
                                <FormBtn variant="primary" type="submit" onClick={this.handleFormSubmit}>
                                    Submit
                        </FormBtn>
                            </Form.Row>
                        </Form.Group>

                    </Form>
                </Card.Body>
            </Card >
        )
    }
}
export default Signup;
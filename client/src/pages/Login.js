import React, { Component } from "react";
import { Form, Col, Card } from "react-bootstrap"
import { Input, FormBtn } from "../component/FormInput";
import { toast } from 'react-toastify';
import API from "../utils/API";
import "./Login.css"
import {Redirect} from "react-router-dom";


class Login extends Component {
  state = {
    form: {},
    goToPatients: false
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
      // if (prop === "email" && form[prop].indexOf("@phendnetwork.org") < 0) {
      //   toast.error("must have Phend Network email")
      //   return
      // }

    }

    if (validData) {
      API.login(this.state.form)
        .then(res => {
          console.log(res.data);
          sessionStorage.setItem("isLoggedIn", true);
          sessionStorage.setItem("userID", res.data.id);
          toast.success(`Welcome ${res.data.firstName}!`);
          // set
          this.setState({goToPatients: true})
        })
        .catch(err => console.log(err));
    }
  };
  render() {
    if (this.state.goToPatients){
      return <Redirect to="/patients"/>;
    }
    return (
      <Card>
        <Card.Body>
          <Form className="login">


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








// const Login = () => (
//   <div className="wrapper">
//     <Form>
//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//          Enter Phend email address
//         </Form.Text>
//       </Form.Group>
//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   </div>
// );

export default Login;
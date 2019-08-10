import React from "react";
import { Form, Col } from "react-bootstrap";
import { Input, FormBtn } from "../FormInput";
import "./style.css"

function NewPatientForm(props) {
  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <Form className="newPatient">
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>First Name</Form.Label>
          <Input
            name="firstName"
            type="text" 
            placeholder="Enter First Name"
            onChange={props.inputChange} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Last Name</Form.Label>
          <Input
            name="lastName"
            type="text" 
            placeholder="Enter Last Name"
            onChange={props.inputChange} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Input
            name="email"
            type="email" 
            placeholder="Enter email"
            onChange={props.inputChange} />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <FormBtn variant="primary" type="submit" onClick={props.submit}>
            Submit
      </FormBtn>
    </Form>
  );
}

export default NewPatientForm;

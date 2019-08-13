import React from "react";
import { Form, Col } from "react-bootstrap";
import { Input, FormBtn, Select } from "../FormInput";
import "./style.css"
import stateList from "../../utils/states"
import gender from "../../utils/gender"

function NewPatientForm(props) {
  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <Form className="newPatient">
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>First Name</Form.Label>
          <Input
            name="firstName"
            value={props.form.firstName}
            type="text"
            placeholder="Enter First Name"
            onChange={props.inputChange} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Last Name</Form.Label>
          <Input
            name="lastName"
            value={props.form.lastName}
            type="text"
            placeholder="Enter Last Name"
            onChange={props.inputChange} />
        </Form.Group>
      </Form.Row>



      <Form.Row>
        <Form.Group as={Col} controlId="formGridDob">
          <Form.Label>DOB</Form.Label>
          <Input
            name="dob"
            value={props.form.dob}
            type="date"
            placeholder="Enter DOB"
            onChange={props.inputChange} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Input
            name="email"
            value={props.form.email}
            type="email"
            placeholder="Enter email"
            onChange={props.inputChange} />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Telephone</Form.Label>
          <Input
            name="phone"
            value={props.form.phone}
            type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="123-456-7890"
            onChange={props.inputChange} />
        </Form.Group>
       
        <Form.Group as={Col} controlId="formGridGender">
          <Form.Label>Gender</Form.Label>
          <Select
            name="gender"
            value={props.form.state}
            onChange={props.inputChange}>
            <option>Choose...</option>
            {gender.map((state => {
              return <option>{state}</option>
            }))}
            <option></option>
          </Select>
        </Form.Group>
       
       
        {/* <Form.Group as={Col} controlId="formGridSex">
          <Form.Label>Gender</Form.Label>
          <Input
            name="sex"
            value={props.form.sex}
            type="text"
            placeholder="Gender"
            onChange={props.inputChange} />
        </Form.Group> */}
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Input
            name="address1"
            value={props.form.address1}
            type="text"
            placeholder="1234 Main St"
            onChange={props.inputChange} />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address</Form.Label>
        <Input
          name="address2"
          value={props.form.address2}
          type="text"
          placeholder="Apartment or Suite #"
          onChange={props.inputChange} />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Input
            name="city"
            value={props.form.city}
            type="text"
            placeholder="City"
            onChange={props.inputChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Select
            name="state"
            value={props.form.state}
            onChange={props.inputChange}>
            <option>Choose...</option>
            {stateList.map((state => {
              return <option>{state}</option>
            }))}
            <option>Other</option>
          </Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Input
            name="zip"
            value={props.form.zip}
            type="text"
            placeholder="Zip Code"
            onChange={props.inputChange} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridprovider">
          <Form.Label>Provider</Form.Label>
          <Select
            name="provider"
            value={props.form.provider}
            onChange={props.inputChange}>
            <option>Choose...</option>
            {props.providers.map((provider => {
              return <option>{`${provider.lastName}, ${provider.firstName}`}</option>
            }))}
            <option></option>
          </Select>
        </Form.Group>
      </Form.Row>
            
      <FormBtn variant="primary" type="submit" onClick={props.submit}>
        Submit
      </FormBtn>
    </Form>
  );
}

export default NewPatientForm;

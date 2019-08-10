import React from "react";
import { Form, Col } from "react-bootstrap";
import { Input, FormBtn } from "../FormInput";
import "./style.css"

function NewProviderForm(props) {
  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <Form className="newProvider">
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
        <Form.Group as={Col} controlId="formGridDob">
          <Form.Label>DOB</Form.Label>
          <Input
            name="dateOfBirth"
            type="date" 
            placeholder="Enter DOB"
            onChange={props.inputChange} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Input
            name="email"
            type="email" 
            placeholder="Enter email"
            onChange={props.inputChange} />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Telephone</Form.Label>
          <Input
            name="telephone"
            type="tel"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="123-456-7890"
            onChange={props.inputChange} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSex">
          <Form.Label>Gender</Form.Label>
          <Input
            name="sex"
            type="text" 
            placeholder="Gender"
            onChange={props.inputChange} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Input
         name="address"
         type="text" 
         placeholder="1234 Main St"
         onChange={props.inputChange} />
            </Form.Group>
            </Form.Row>

      <Form.Group controlId="formGridAddress2">
      <Form.Label>Address</Form.Label>
      <Input
         name="address"
         type="text" 
         placeholder="Apartment or Suite #"
         onChange={props.inputChange} />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Input
         name="address"
         type="text" 
         placeholder="City"
         onChange={props.inputChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select">
            <option>Choose...</option>
           
    <option value="alabama">Alabama</option>
    <option value="	alaska">Alaska</option>
    <option value="	arizona">Arizona</option>
    <option value="	arkansas">Arkansas</option>
    <option value="california">California</option>
    <option value="colorado">Colorado</option>
    <option value="	connecticut">Connecticut</option>
    <option value="	delaware">Delaware</option>
    <option value="	florida">Florida</option>
    <option value="georgia">Georgia</option>
    <option value="hawaii">Hawaii</option>
    <option value="	idaho">Idaho</option>
    <option value="	illinois">Illinois</option>
    <option value="	indiana">Indiana</option>
    <option value="iowa">Iowa</option>
    <option value="kansas">Kansas</option>
    <option value="	kentucky">Kentucky</option>
    <option value="	louisiana">Louisiana</option>
    <option value="	maine">Maine</option>
    <option value="maryland">Maryland</option>
    <option value="massachusetts">Massachusetts</option>
    <option value="	michigan">Alaska</option>
    <option value="	arizona">Michigan</option>
    <option value="	minnesota">Minnesota</option>
    <option value="mississippi">Mississippi</option>
    <option value="missouri">Missouri</option>
    <option value="montana">Montana</option>
    <option value="nebraska">Nebraska</option>
    <option value="nevada">Nevada</option>
    <option value="new hampshire">New Hampshire</option>
    <option value="new jersey">New Jersey</option>
    <option value="new mexico">New Mexico</option>
    <option value="new york">New York</option>
    <option value="north carolina">North Carolina</option>
    <option value="north dakota">North Dakota</option>
    <option value="ohio">Ohio</option>
    <option value="oklahoma">Oklahoma</option>
    <option value="oregon">Oregon</option>
    <option value="pennsylvania">Pennsylvania</option>
    <option value="rhode island">Rhode Island</option>
    <option value="south carolina">South Carolina</option>
    <option value="south dakota">South Dakota</option>
    <option value="tennessee">Tennessee</option>
    <option value="texas">Texas</option>
    <option value="utah">Utah</option>
    <option value="vermont">Vermont</option>
    <option value="virginia">Virginia</option>
    <option value="washington">Washington</option>
    <option value="west virginia">West Virginia</option>
    <option value="wisconsin">Wisconsin</option>
    <option value="wyoming">Wyoming</option>
             <option>Other</option>
             <Input
         name="address"
         type="text" 
         placeholder="City"
         onChange={props.inputChange} />
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Input
         name="address"
         type="text" 
         placeholder="Zip Code"
         onChange={props.inputChange} />
        </Form.Group>
      </Form.Row>

      <FormBtn variant="primary" type="submit" onClick={props.submit}>
            Submit
      </FormBtn>
    </Form>
  );
}

export default NewProviderForm;

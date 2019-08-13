import React from "react";
import { Form, Col } from "react-bootstrap";
import { Input, FormBtn, Select } from "../FormInput";
import "./style.css"
import stateList from "../../utils/states"

function NewProviderForm(props) {
  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <Form className="newProvider">
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
        <Form.Group as={Col} controlId="formGridIssueDate">
          <Form.Label>Issue Date</Form.Label>
          <Input
            name="issueDate"
            value={props.form.issueDate}
            type="date"
            placeholder="Date of Issue"
            onChange={props.inputChange} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridexpireDate">
          <Form.Label>Expiration Date</Form.Label>
          <Input
            name="expireDate"
            value={props.form.expireDate}
            type="date"
            placeholder="Expiration Date"
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
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>E-Mail</Form.Label>
          <Input
            name="email"
            value={props.form.email}
            type="text"
            placeholder="email"
            onChange={props.inputChange} />
        </Form.Group>
      </Form.Row>


      <Form.Group controlId="formGridLicenseType">
        <Form.Label>License Type</Form.Label>
        <Select
          name="license"
          value={props.form.license}
          onChange={props.inputChange}>
          <option>Choose...</option>
          <option value="lcsw-c">LCSW-C</option>
          <option value="	lcsw">LCSW</option>
          <option value="	lmsw">LMSW</option>
          <option value="	lcpc">LCPC</option>
          <option value="lps">LPC</option>
        </Select>

      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridSupervisor">
          <Form.Label>Supervisor</Form.Label>
          <Input
            name="supervisor"
            value={props.form.supervisor}
            type="text"
            placeholder="Supervisor"
            onChange={props.inputChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridissueSate">
          <Form.Label>Issuing State</Form.Label>
          <Select
            name="issueState"
            value={props.form.issueState}
            onChange={props.inputChange}>
            <option>Choose...</option>
            {stateList.map((state => {
              return <option>{state}</option>
            }))}
            <option>Other</option>
          </Select>
        </Form.Group>


      </Form.Row>

      <FormBtn variant="primary" type="submit" onClick={props.submit}>
        Submit
      </FormBtn>
    </Form>
  );
}

export default NewProviderForm;

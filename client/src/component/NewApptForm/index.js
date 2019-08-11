import React from "react";
import { Form } from "react-bootstrap";
import { Input, FormBtn } from "../FormInput";
import "./style.css"

function NewApptForm(props){
return (
  <Form className = "newAppt">
  <Form.Group controlId="exampleForm.ControlInput1">
     </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Note Type</Form.Label>
    <Form.Control as="select">
      <option>Initial Evaluation</option>
      <option>Progress Note</option>
      <option>Non-Billable Contact</option>
      <option>Discharge Summary</option>
          </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>SOAP Note</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <FormBtn variant="primary" type="submit" onClick={props.submit}>
            Submit
      </FormBtn>
</Form>
)
}
export default NewApptForm;
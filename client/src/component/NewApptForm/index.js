import React from "react";
import { Form } from "react-bootstrap";
import { Input, FormBtn, Select } from "../FormInput";
// import noteType from "../../utils/noteType"
import "./style.css"

function NewApptForm(props){
return (
  <Form className = "newAppt">
  <Form.Group controlId="exampleForm.ControlInput1">
<Form.Label>Patient</Form.Label>
{/* 
<Select
            name="patient"
            value={props.form.patient}
            onChange={props.inputChange}>
            <option>Choose...</option>
            {props.patient.map((patient => {
              return <option>{`${patient.lastName}, ${patient.firstName}`}</option>
            }))}
            <option></option>
          </Select> */}
     </Form.Group>


  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Note Type</Form.Label>
    {/* <Select
            name="noteType"
            value={props.form.noteType}
            onChange={props.inputChange}>
            <option>Choose...</option>
            {noteType.map((noteType => {
              return <option>{noteType}</option>
            }))}
            <option>Other</option>
          </Select> */}
    
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
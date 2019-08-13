import React from "react";
import { Form, Col } from "react-bootstrap";
import { FormBtn, Select } from "../FormInput";
// import noteType from "../../utils/noteType"
import "./style.css"

function NewApptForm(props){
return (
  <Form className = "newAppt">
    <Form.Row> 
  <Form.Group as={Col}controlId="formGridpatient">
<Form.Label>Patient</Form.Label>
<Form.Control placeholder="Should pull drop menu with patient info in database" as="select" rows="2" />
        
          {/* <Select
            name="patient"
            value={props.form.state}
            onChange={props.inputChange}>
            <option>Choose...</option>
            {props.patient.map((patient => {
              return <option>{`${patient.lastName}, ${patient.firstName}`}</option>
            }))}
            <option></option>
          </Select> */}
        </Form.Group>
        </Form.Row>
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
   

     <Form.Group controlId="exampleForm.ControlTextarea0">
       
    <Form.Label>Diagnosis(es)</Form.Label>
    <Form.Control as="textarea" rows="2" />
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
    <option>choose...</option>
      <option>Initial Evaluation</option>
      <option>Progress Note</option>
      <option>Non-Billable Contact</option>
      <option>Discharge Summary</option>
          </Form.Control>
  </Form.Group>
  
  <Form.Group controlId="exampleForm.ControlTextarea2">
    <Form.Label>SOAP Note</Form.Label>
    <Form.Control as="textarea" rows="5" />
  </Form.Group>


  <FormBtn variant="primary" type="submit" onClick={props.submit}>
            Submit
      </FormBtn>
</Form>
)
}
export default NewApptForm;
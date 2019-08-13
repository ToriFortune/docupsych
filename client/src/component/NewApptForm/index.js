import React from "react";
import { Form, Col } from "react-bootstrap";
import { Input, FormBtn, Select } from "../FormInput";
// import noteType from "../../utils/noteType"
import "./style.css"
import noteType from "../../utils/noteType"

function NewApptForm(props) {
  return (
    <Form className="newAppt">
      <Form.Row>
        <Form.Group as={Col} controlId="formGridpatient">
          <Form.Label>Patient</Form.Label>
          <Input
            name="name"
            value={props.patient}
            type="text"
            placeholder="name"
            disabled
             />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridIssueDate">
          <Form.Label>Appointment Date</Form.Label>
          <Input
            name="apptDate"
            value={props.form.appointmentDate}
            type="date"
            placeholder="Date of Appointment"
            onChange={props.inputChange} />
        </Form.Group>
        {/* <Form.Group as={Col} controlId="formGridexpireDate">
          <Form.Label>Expiration Date</Form.Label>
          <Input
            name="expireDate"
            value={props.form.expireDate}
            type="date"
            placeholder="Expiration Date"
            onChange={props.inputChange} />
        </Form.Group> */}
      </Form.Row>

      <Form.Group controlId="exampleForm.ControlTextarea0">

        <Form.Label>Diagnosis(es)</Form.Label>
        <Form.Control as="textarea" rows="2" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Note Type</Form.Label>
        <Select
            name="noteType"
            value={props.form.noteType}
            onChange={props.inputChange}>
            <option>Choose...</option>
            {noteType.map((noteType => {
              return <option>{noteType}</option>
            }))}
          </Select>
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
import React from "react";
import { Form,Button  } from "react-bootstrap"

const Providers = () => (
  <div className="wrapper">
  <Form>
  <Form.Group controlId="formBasicPassword">
  <label for="comment">Note Entry</label>
  <textarea className="form-control" rows = "5" id ="comment"></textarea>
        {/* <Form.Control type="password" placeholder="Password" /> */}
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit Note
      </Button>
  
    </Form>
</div>
);

export default Providers;
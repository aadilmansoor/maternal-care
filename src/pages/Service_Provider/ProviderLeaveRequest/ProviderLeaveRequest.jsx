import React from "react";
import "./ProviderLeaveRequest.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const ProviderLeaveRequest = () => {
  return (
    <div>
      <h2 className="my-5 text-center">Leave Request</h2>
      <div className="wid">
      <div class="input-group mb-3">
       
        <input
          type="date"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <FloatingLabel controlId="floatingTextarea2" label="Reason">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <div className="mt-3 d-flex gap-2 justify-content-end">
      <Button  variant="danger" size="sm">Cancel</Button>{' '}
      <Button variant="primary"size="sm">Submit</Button>{' '}
      </div>
      </div>
    </div>
  );
};

export default ProviderLeaveRequest;

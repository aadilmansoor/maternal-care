import "./Complaint.css";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";

const Complaint = () => {
  return (
    <div>
      <h2 className="my-5 text-center">Complaints</h2>
      
      <div className="wid">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Subject"
          aria-label="Username"
         
        />
      </InputGroup>
        <div class="input-group mb-3"></div>
        <FloatingLabel controlId="floatingTextarea2" label="Type here">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <div className="mt-3 d-flex gap-2 justify-content-end">
          <Button variant="danger" size="sm">
            Cancel
          </Button>{" "}
          <Button variant="primary" size="sm">
            Submit
          </Button>{" "}
        </div>
      </div>
      
    </div>
  );
};

export default Complaint;

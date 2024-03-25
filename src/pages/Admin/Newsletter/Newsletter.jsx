import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="newsletter_container">
        <h2 className="text-center mt-5 mb-5">Newsletter</h2>
        <InputGroup className="mb-3">
          <Form.Control placeholder="Subject" aria-label="Subject" />
        </InputGroup>
        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "200px" }}
          />
        </FloatingLabel>
        <div className="d-flex justify-content-end gap-3 mt-3 mb-5">
          <Button variant="danger">Cancel</Button>
          <Button variant="success">Send</Button>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;

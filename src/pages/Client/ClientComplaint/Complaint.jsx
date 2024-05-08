import { useState } from "react";
import "./Complaint.css";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { registerComplaintAPI } from "../../../Services/allAPI";
import { useUserContext } from "../../../context/UserContext";
import { toast } from "react-toastify";

const Complaint = () => {
  const [complaintDetails, setComplaintDetails] = useState({
    subject: "",
    reason: "",
  });

  const { user } = useUserContext();

  const handleSubmit = async () => {
    if (!complaintDetails.subject || !complaintDetails.reason) {
      toast.warning("Please fill in all fields.");
    }
    const { id, username } = user;
    const result = await registerComplaintAPI({
      ...complaintDetails,
      userId: id,
      name: username,
    });
    if (result.status === 200) {
      toast.success("Complaint Registered");
      setComplaintDetails({ subject: "", reason: "" });
    }
  };

  return (
    <div>
      <h2 className="my-5 text-center">Complaints</h2>

      <div className="wid">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Subject"
            aria-label="Username"
            value={complaintDetails.subject}
            onChange={(e) =>
              setComplaintDetails({
                ...complaintDetails,
                subject: e.target.value,
              })
            }
          />
        </InputGroup>
        <div className="input-group mb-3"></div>
        <FloatingLabel controlId="floatingTextarea2" label="Type here">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            value={complaintDetails.reason}
            onChange={(e) =>
              setComplaintDetails({
                ...complaintDetails,
                reason: e.target.value,
              })
            }
          />
        </FloatingLabel>
        <div className="mt-3 d-flex gap-2 justify-content-end">
          <Button variant="danger" size="sm">
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Complaint;

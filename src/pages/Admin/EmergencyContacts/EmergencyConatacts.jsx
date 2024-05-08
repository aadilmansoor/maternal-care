import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { addEmergencyAPI, getEmergencyAPI } from "../../../Services/allAPI";
import EmergencyTable from "../../../components/EmergencyTable/EmergencyTable";

const EmergencyContacts = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [show, setShow] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    service: "",
    location: "",
    phoneNumber: "",
  });
  console.log({ contactDetails });

  const getEmergency = async () => {
    const result = await getEmergencyAPI();
    console.log({ result });
    if (result.status === 200) {
      setAllContacts(result.data.emergency_details);
    }
  };
  useEffect(() => {
    getEmergency();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddEmergency = async () => {
    const result = await addEmergencyAPI({
      emergency_support: contactDetails.service,
      location: contactDetails.location,
      phonenumber: contactDetails.phoneNumber,
    });
    if (result.status === 200) {
      setContactDetails({
        service: "",
        location: "",
        phoneNumber: "",
      });
      handleClose();
      toast.success("Added Successfully");
      getEmergency();
    }
  };

  return (
    <div className="my-5 text-center">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Emergency Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Service</Form.Label>
              <Form.Control
                type="text"
                value={contactDetails.service}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    service: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={contactDetails.location}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    location: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={contactDetails.phoneNumber}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    phoneNumber: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddEmergency}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <EmergencyTable allContacts={allContacts} />
      <Button className="my-5" onClick={handleShow}>
        Add Emergency Contact
      </Button>
    </div>
  );
};

export default EmergencyContacts;

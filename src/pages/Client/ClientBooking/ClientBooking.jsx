import { Button, Form, InputGroup, Modal, Table } from "react-bootstrap";
import "./ClientBooking.css";
import { useEffect, useState } from "react";
const ClientBooking = () => {
  const [show, setShow] = useState(false);
  const [services, setServices] = useState([]);
  const [typeCare, setTypeCare] = useState("");

  useEffect(() => {
    if (typeCare === "1" || typeCare === "2") {
      setServices(["caretaker"]);
    } else if (typeCare === "3") {
      setServices(["therapist"]);
    } else if (typeCare === "4") {
      setServices(["doctor", "nurse"]);
    } else {
      setServices([]);
    }
  }, [typeCare]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h2 className="appointment mb-4 mt-3">Book Appointment</h2>
      <div className="container_group">
        <div className="mb-2 d-flex gap-2 input_group">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setTypeCare(e.target.value)}
          >
            <option>Select Type of Care</option>
            <option value="1">Pre-delivery Care</option>
            <option value="2">Post-delivery Care</option>
            <option value="3">Yoga Therapy</option>
            <option value="4">Doctor Support</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            disabled={services.length > 0 ? false : true}
          >
            <option>Select Service Type</option>
            {services.length > 0
              ? services.map((value, index) => {
                  return (
                    <option value={index + 1} className="text-capitalize">
                      {value}
                    </option>
                  );
                })
              : ""}
          </Form.Select>
          <Form.Select aria-label="Default select example">
            <option>Select Timing</option>
            <option value="1">Full Day</option>
            <option value="2">Day</option>
            <option value="3">Night</option>
            <option value="4">Custom</option>
          </Form.Select>
        </div>
        <div className="mb-2 d-flex gap-2 input_group">
          <input className=" form-control " type="time" />
          <input className=" form-control " type="time" />
          <input className=" form-control " type="date" />
          <input className=" form-control " type="date" />
        </div>
        <InputGroup className="search_input mb-5">
          <Form.Control placeholder="Search By Location" aria-label="Search" />
          <InputGroup.Text id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="table1">
        <Table responsive bordered hover>
          <thead className="p-2">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Rate/hr</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fawas</td>
              <td>Kochi</td>
              <td>1000</td>
              <td>
                <button className="btn btn-sm btn-success" onClick={handleShow}>
                  Book
                </button>
              </td>
            </tr>
            <tr>
              <td>Aadil</td>
              <td>Kannur</td>
              <td>1000</td>
              <td>
                <button className="btn btn-sm btn-success" onClick={handleShow}>
                  Book
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClientBooking;

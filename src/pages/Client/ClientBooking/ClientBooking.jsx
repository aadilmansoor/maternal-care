import { Button, Form, InputGroup, Modal, Table } from "react-bootstrap";
import "./ClientBooking.css";
import { useState } from "react";
const ClientBooking = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <h2 className="appoinment mb-4 mt-3">Book Appoinment</h2>
      <div className="mb-5 d-flex gap-2 mx-4 input_group">
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <input className=" form-control " type="date" />
        <input className=" form-control " type="date" />
        <InputGroup>
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">
            <i class="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="table1">
      <Table responsive bordered hover>
        
        <thead className="p-2">
          <tr>
            <th>Name</th>
            <th>Location</th>

            <th></th>
          </tr>
        </thead>
        <tbody >
          <tr>
            
            
            <td>Fawas</td>
            <td>Kochi</td>
            <td>
              <button className="btn btn-sm btn-success" onClick={handleShow}>Book</button>
            </td>
          </tr>
          <tr>
            
            
            <td>Aadil</td>
            <td>Kannur</td>
            <td>
              <button className="btn btn-sm btn-success" onClick={handleShow}>Book</button>
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

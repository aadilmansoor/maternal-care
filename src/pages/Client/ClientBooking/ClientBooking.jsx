import { Button, Form, InputGroup, Modal, Table } from "react-bootstrap";
import "./ClientBooking.css";
import { useEffect, useState } from "react";
import { searchServiceProvider } from "../../../Services/allAPI";
const ClientBooking = () => {
  const [show, setShow] = useState(false);
  const [services, setServices] = useState([]);
  const [typeCare, setTypeCare] = useState("pre-delivery care");
  const [service, setService] = useState("caretaker");
  const [timing, setTiming] = useState("");
  const [startTime, setStartTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [disableTime, setDisableTime] = useState(true);
  const [location, setLocation] = useState("");
  console.log(timing);

  useEffect(() => {
    if (typeCare === "pre-delivery care" || typeCare === "post-delivery care") {
      setServices(["caretaker"]);
      setService("caretaker");
    } else if (typeCare === "yoga therapy") {
      setServices(["therapist"]);
      setService("therapist");
    } else if (typeCare === "doctor support") {
      setServices(["doctor", "nurse"]);
      setService("doctor");
    } else {
      setServices([]);
    }
  }, [typeCare]);

  useEffect(() => {
    if (timing === "full day") {
      setStartTime("00:00");
      setEndTime("00:00");
      setDisableTime(true);
    } else if (timing === "day") {
      setStartTime("09:00");
      setEndTime("17:00");
      setDisableTime(true);
    } else if (timing === "night") {
      setStartTime("18:00");
      setEndTime("22:00");
      setDisableTime(true);
    } else if (timing === "custom") {
      setStartTime("");
      setEndTime("");
      setDisableTime(false);
    }
  }, [timing]);

  useEffect(() => {
    const fetchServiceProvider = async () => {
      const result = await searchServiceProvider({ location, service });
      console.log(result);
    };
    fetchServiceProvider();
  }, [service, location]);

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
            className="text-capitalize"
          >
            <option value="pre-delivery care">Pre-delivery Care</option>
            <option value="post-delivery care">Post-delivery Care</option>
            <option value="yoga therapy">Yoga Therapy</option>
            <option value="doctor support">Doctor Support</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setService(e.target.value)}
            className="text-capitalize"
          >
            {services.map((value) => {
              return (
                <option key={value} value={value} className="text-capitalize">
                  {value}
                </option>
              );
            })}
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setTiming(e.target.value)}
          >
            <option>Select Timing</option>
            <option value="full day">Full Day</option>
            <option value="day">Day</option>
            <option value="night">Night</option>
            <option value="custom">Custom</option>
          </Form.Select>
        </div>
        <div className="mb-2 d-flex gap-2 input_group">
          <input
            className=" form-control "
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            disabled={disableTime}
          />
          <input
            className=" form-control "
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            disabled={disableTime}
          />
          <input
            className=" form-control "
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            className=" form-control "
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <InputGroup className="search_input mb-5">
          <Form.Control
            placeholder="Search By Location"
            aria-label="Search"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <InputGroup.Text id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="table1">
        <Table responsive bordered hover>
          <thead className="p-2">
            <tr>
              <th>
                <strong>Name</strong>
              </th>
              <th>
                <strong>Location</strong>
              </th>
              <th>
                <strong>Rate/hr</strong>
              </th>
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
        <Modal.Body>
          <ul className="provider_details">
            <li className="provider_head">
              <strong>Service Provider Details</strong>
            </li>
            <li>Name:</li>
            <li>Location:</li>
            <li>Rate/hr:</li>
            <li>
              Treatment Type:{" "}
              <span className="text-capitalize">{typeCare}</span>
            </li>
            <li>
              Service: <span className="text-capitalize">{service}</span>
            </li>
            <li>
              Timing: <span className="text-capitalize">{timing}</span>
            </li>
            <li>Start Time: {startTime}</li>
            <li>End Time: {endTime} </li>
            <li>Start Date: {startDate} </li>
            <li>End Date: {endDate} </li>
          </ul>
        </Modal.Body>
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

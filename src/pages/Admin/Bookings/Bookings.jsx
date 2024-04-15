import { Button, Card, Col, Row } from "react-bootstrap";
import "./Bookings.css";
function Bookings() {
  function col() {
    return (
      <Col
        lg={4}
        md={6}
        className="d-flex justify-content-center p-0 mt-4 mb-4"
      >
        <Card style={{ width: "22rem" }} className="card">
          <ul className="booking_details mt-3">
            <li className="details_heading">
              <strong>Service Provider</strong>
            </li>
            <li className="">Name: Muhammed Aadil Mansoor</li>
            <li className="">Location:</li>
            <li className="">Rate/hr:</li>
            <li className="details_heading">
              <strong>User Details</strong>
            </li>
            <li className="">Name:</li>
            <li className="">Email:</li>
            <li className="">Phone Number: </li>
            <li className="details_heading">
              <strong>Booking Details</strong>
            </li>
            <li className="">Service:</li>
            <li className="">Care Type:</li>
            <li className="">Starting Time:</li>
            <li className="">End Time:</li>
            <li className="">Starting Date:</li>
            <li className="">End Date:</li>
          </ul>
          <Card.Footer>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="success">Accept</Button>
              <Button variant="danger">Reject</Button>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
  return (
    <div className="booking_page">
      <h1 className="text-center my-5">Bookings</h1>
      <Row>
        {col()}
        {col()}
      </Row>
    </div>
  );
}

export default Bookings;

import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import "./SpBookings.css";

const SpBookings = () => {
  function col() {
    return (
      <Col
        lg={4}
        md={6}
        className="d-flex justify-content-center p-0 mt-4 mb-4 booking_card"
      >
        <Card style={{ width: "18rem" }} className="card">
          <ListGroup variant="flush" className="mt-3">
            <ListGroup.Item className="border-0">
              <strong>Username:</strong>
            </ListGroup.Item>
            <ListGroup.Item className="border-0">Service:</ListGroup.Item>
            <ListGroup.Item className="border-0">Care Type:</ListGroup.Item>
            <ListGroup.Item className="border-0">Starting Time:</ListGroup.Item>
            <ListGroup.Item className="border-0">End Time:</ListGroup.Item>
            <ListGroup.Item className="border-0">Starting Date:</ListGroup.Item>
            <ListGroup.Item className="border-0">End Date:</ListGroup.Item>
          </ListGroup>
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
      <h1 className="text-center mt-4">Bookings</h1>
      <Row>
        {col()}
        {col()}
      </Row>
    </div>
  );
};

export default SpBookings;

import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import "./SpBookings.css"

const SpBookings = () => {
    function col() {
        return (
        <Col lg={4} md={6} className="d-flex justify-content-center p-0 mt-4 mb-4 booking_card">

    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <Card.Title>Username</Card.Title>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Service:</ListGroup.Item>
        <ListGroup.Item>Care Type:</ListGroup.Item>

        <ListGroup.Item>Starting Time:</ListGroup.Item>
        <ListGroup.Item>End Time:</ListGroup.Item>
        <ListGroup.Item>Starting Date:</ListGroup.Item>
        <ListGroup.Item>End Date:</ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="success">Accept</Button>
          <Button variant="danger">Reject</Button>
        </div>
      </Card.Footer>
    </Card>
        </Col>
        )
    }
  return (
    <div >
                <h1 className="text-center mt-4">Bookings</h1>
        <Row>
           {col()}
           {col()}
           {col()}
           {col()}
           {col()}
           {col()}
           {col()}
           {col()}
           {col()}
           {col()}
           {col()}
        </Row>
      
      
    </div>
  );
};

export default SpBookings;

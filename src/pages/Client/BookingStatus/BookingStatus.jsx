import React from 'react'
import "./BookingStatus.css"
import { Button, Card, Col, Row } from 'react-bootstrap'

const BookingStatus = () => {
  return (
    <div>
        <h2 className='text-center my-3'>Booking Status</h2>
        <Row>
            <Col className='d-flex justify-content-center ' sm={12}>
         <Card style={{ width: '100%', margin:"0 40px" }}>
      <Card.Body>
        <Card.Subtitle className="mb-4 text-muted ">Service Provider:</Card.Subtitle>
        <Card.Subtitle className="mb-4 text-muted">Time:</Card.Subtitle>
        <Card.Subtitle className="mb-4 text-muted">Status:</Card.Subtitle>
        <div className='text-center'>
        <Button size='sm' disabled variant='success'>Pay Now</Button>
        </div>
      </Card.Body>
    </Card>
    </Col>
   </Row>

    </div>
  )
}

export default BookingStatus
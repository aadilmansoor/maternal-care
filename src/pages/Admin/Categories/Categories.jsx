import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image1 from '../../../Images/img10.jpg'
import Image2 from '../../../Images/img11.jpg'
import Image3 from '../../../Images/img12.jpg'
import Image4 from '../../../Images/img13.jpg'

const Categories = () => {
  return (
    <div>
    <Row>
        <Col>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={Image3} />
        <Card.Title className='text-center'>Pre Delivery Care</Card.Title>
       
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img  variant="top" src={Image1} />
        <Card.Title className='text-center'>Yoga Therapy</Card.Title>
        
        
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={Image2} />
        <Card.Title className='text-center'>Doctors Support</Card.Title>
        
        
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img  variant="top" src={Image4} />
        <Card.Title className='text-center'>Post Delivery Care</Card.Title>
        
       
      </Card.Body>
    </Card>
    </Col>

    </Row>
   
  
    </div>
    
  )
}

export default Categories
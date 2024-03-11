import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SpRegister() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-3 mb-5'>
                <Container>
                    <Row className='rounded shadow'>
                        <Col md={3} className='mt-5'>
                            <img src="https://i0.wp.com/www.agencyreporter.com/wp-content/uploads/2019/09/baby-care-industry.jpg?fit=592%2C509&ssl=1" alt="no image" style={{ height: '700px', width: '100%' }} />
                        </Col>
                        
                        <Col md={6}>
                            <Row>
                                <Col md={12} className='d-flex justify-content-center align-items-center mt-5 mb-5 flex-column'>
                                    <h3 className='text-center mt-3 text-primary'>Server Provider Registration</h3>
                                    <input style={{ borderRadius: '50px' }} type="text" className='form-control mt-3' placeholder='Username' />
                                    <input style={{ borderRadius: '50px' }} type="email" className='form-control mt-3' placeholder='Email Address' />
                                    <input style={{ borderRadius: '50px' }} type="password" className='form-control mt-3' placeholder='Password' />
                                    <input style={{ borderRadius: '50px' }} type="tel" className='form-control mt-3' placeholder='Phone Number' />
                                    <input type="text" placeholder='service' style={{ borderRadius: '50px' }} className='form-control mb-3 mt-2' />
                                    <input type="text" placeholder='specialization' style={{ borderRadius: '50px' }} className='form-control mb-3 mt-2' />
                                    <input type="text" placeholder='qualification' style={{ borderRadius: '50px' }} className='form-control mb-3 mt-2' />
                                    <input type="file" placeholder='Experience Year' style={{ borderRadius: '50px' }} className='form-control mb-3 mt-2' />
                                    <input type="file" placeholder='Police Clearence Certificate' style={{ borderRadius: '50px' }} className='form-control mb-3 mt-2' />
                                    <input type="rate" placeholder='Rate' style={{ borderRadius: '50px' }} className='form-control mb-3 mt-2' />
                                    <button className='w-100 mt-3 btn btn-danger' style={{ borderRadius: '50px' }}>REGISTER</button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3} className='mt-5'>
                            <img className=' mb-3' src="https://dailynclexchallenge.com/static/img/blog/nurse-with-pregnant.png" alt="no image" style={{ height: '700px', width: '100%' }} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SpRegister
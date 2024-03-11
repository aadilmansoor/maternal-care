import React from 'react'
import '../Login/Login.css'
import { Col, Container, Row } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
import google from '../Images/google2.png'

function Login() {
  return (
    <>
  <Row>
  <div className='login_page' style={{ width: '100%', minHeight: '100vh' }}>
    <Row className='mt-5'>
      <Col lg={1}></Col>
      <Col lg={10} className='mt-5 d-flex justify-content-center align-items-center'>
        <div className='shadow rounded login_body' style={{ width: '100%', maxWidth: '800px', backgroundColor: 'white', padding: '20px' }}>
          <Row>
            <Col lg={6} className='d-flex flex-column justify-content-center align-items-center'>
              <h2 className='mt-4' style={{ color: 'blueviolet', textAlign: 'center' }}>HELLO<br />WELCOME!</h2>
              <img src="https://media.istockphoto.com/id/1341609914/vector/pregnant-couple-background-vector-illustration-with-a-husband-takes-care-and-hugs-his-wife.jpg?s=612x612&w=0&k=20&c=IZ7k7IktzY_x61KybAj2yBioHTLk6r86jafhB3ExN0E=" style={{ width: '200px', height: '200px', borderRadius: '50%', margin: '20px 0' }} alt="" />
              <p style={{ fontWeight: 'bold', color: 'blueviolet', textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, dignissimos amet hic sed iusto illum similique sit, animi quam</p>
            </Col>

            <Col lg={6} className='mt-4'>
              <div className='rounded' style={{ backgroundColor: 'white', padding: '20px' }}>
                <h4 className='mt-3' style={{ color: 'blueviolet', textAlign: 'center' }}>Login Your Account</h4>
                <div className='d-flex justify-content-center align-items-center'>
                  <TextField className='w-75 mt-4' id="standard-basic" type='email' label="Email" variant="standard" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <TextField className='w-75 mt-4' id="standard-basic" type='password' label="Password" variant="standard" />
                </div>
                <div className='d-flex align-items-center mt-4'>
                  <input className='me-2' style={{ width: '20px', height: '20px' }} type="checkbox" />
                  <label htmlFor="remember" className='me-3'>Remember?</label>
                  <a href="#" className='me-auto'>Forgot password?</a>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <button className='btn login_button rounded w-75 mt-4'>Login</button>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                  <p>or connect with google</p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='google d-flex justify-content-evenly rounded' style={{ width: '75%', height: '50px', backgroundColor: '#db4437', color: 'white', cursor: 'pointer' }}>
                    <img className='ms-2 mt-2' src={google} style={{ width: '25px', height: '25px' }} alt="" />
                    <h6 className='mt-2'>Sign in with Google</h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col lg={1}></Col>
    </Row>
  </div>
</Row>
</>
  )
}

export default Login
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

function SpRegister() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
        <Container>
          <Row className="rounded shadow">
            <Col md={3} className="mt-5">
              <img
                src="https://i0.wp.com/www.agencyreporter.com/wp-content/uploads/2019/09/baby-care-industry.jpg?fit=592%2C509&ssl=1"
                alt="serviceprovider1"
                style={{ height: "700px", width: "100%" }}
              />
            </Col>

            <Col md={6}>
              <Row>
                <Col
                  md={12}
                  className="d-flex justify-content-center align-items-center mt-5 mb-5 flex-column"
                >
                  <h3 className=" roboto-bold text-center mt-3 text-primary">
                    Service Provider Registration
                  </h3>
                  <form action="">

                 
                  <input
                    style={{ borderRadius: "50px" }}
                    type="text"
                    className="form-control mt-3"
                    placeholder="Username"
                    required
                  />
                  <input
                    style={{ borderRadius: "50px" }}
                    type="email"
                    className="form-control mt-3"
                    placeholder="Email Address"
                    required
                  />
                  <input
                    style={{ borderRadius: "50px" }}
                    type="password"
                    className="form-control mt-3"
                    placeholder="Password"
                    required
                  />
                  <input
                    style={{ borderRadius: "50px" }}
                    type="tel"
                    className="form-control mt-3"
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Service"
                    style={{ borderRadius: "50px" }}
                    className="form-control mb-3 mt-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Specialization"
                    style={{ borderRadius: "50px" }}
                    className="form-control mb-3 mt-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Qualification"
                    style={{ borderRadius: "50px" }}
                    className="form-control mb-3 mt-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Experience Year"
                    style={{ borderRadius: "50px" }}
                    className="form-control mb-3 mt-2"
                    required
                  />
                  <Form.Group controlId="formFile" className="mb-3 w-100"  >
                    <Form.Label className="ms-2">Experience Certificate</Form.Label>
                    <Form.Control type="file"  required accept=".pdf" style={{ borderRadius: "50px" }}/>
                  </Form.Group>
                  <input
                    type="rate"
                    placeholder="Rate"
                    style={{ borderRadius: "50px" }}
                    className="form-control mb-3 mt-2"
                    required

                  />
                  <button
                  type="submit"
                    className="w-100 mt-3 btn btn-danger"
                    style={{ borderRadius: "50px" }}
                  >
                    REGISTER
                  </button>
                  </form>
                </Col>
              </Row>
            </Col>
            <Col md={3} className="mt-5">
              <img
                className=" mb-3"
                src="https://dailynclexchallenge.com/static/img/blog/nurse-with-pregnant.png"
                alt="serviceprovider2"
                style={{ height: "700px", width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SpRegister;

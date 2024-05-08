import { Col, Container, Row } from "react-bootstrap";
import { ServicesCards } from "../../../components";
import { adminServices } from "../../../Constants/serviceList";

function AdminDashBoard() {
  return (
    <>
      <Container>
        <div className="mt-5 mb-5">
          <Row>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <img
                    src="https://images.pexels.com/photos/7282807/pexels-photo-7282807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{ height: "350px", width: "100%" }}
                    className="rounded-4"
                    alt="admindash1"
                  />
                </Col>
                <Col md={6} className="mt-3">
                  <img
                    src="https://images.pexels.com/photos/7282318/pexels-photo-7282318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{ height: "350px", width: "100%" }}
                    className="rounded-4"
                    alt="admindash2"
                  />
                </Col>
              </Row>
            </Col>
            <Col
              md={6}
              className="mt-5 d-flex justify-content-center align-items-center flex-column"
            >
              <h3 className="poppins-semibold-italic">
                Begin your child's journey with Us
              </h3>
              <p className="text-center text-secondary poppins-regular">
                Welcome to our platform. We prioritize excellence in care and
                support, ensuring every aspect meets the highest standards.
              </p>
            </Col>
          </Row>
          <h2 className=" services text-center mt-5 mb-3">Admin Panel</h2>
          <ServicesCards services={adminServices} />
        </div>
      </Container>
    </>
  );
}

export default AdminDashBoard;

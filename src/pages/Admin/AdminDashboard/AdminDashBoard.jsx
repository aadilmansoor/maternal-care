import { Col, Container, Row } from "react-bootstrap";
import { ServicesCards, UserHeader } from "../../../components";
import { adminServices } from "../../../Constants/serviceList";

function AdminDashBoard() {
  return (
    <>
      <UserHeader role="Admin"/>
      <Container>
        <div className="mt-5 mb-5">
          <Row>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <img
                    src="https://images.pexels.com/photos/7282807/pexels-photo-7282807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{ height: "350px", width: "100%" }}
                    alt="admindash1"
                  />
                </Col>
                <Col md={6} className="mt-3">
                  <img
                    src="https://images.pexels.com/photos/7282318/pexels-photo-7282318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{ height: "350px", width: "100%" }}
                    alt="admindash2"
                  />
                </Col>
              </Row>
            </Col>
            <Col
              md={6}
              className="mt-5 d-flex justify-content-center align-items-center flex-column"
            >
              <h3 className="text-danger">
                Begin your child's journey with Us
              </h3>
              <p className="text-center text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias, labore consequuntur id, accusamus adipisci
                aut blanditiis provident expedita aperiam explicabo et tempora
                tempore facilis doloremque placeat asperiores reprehenderit non.
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

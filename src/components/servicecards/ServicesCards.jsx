import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./serviceCard.css";

const ServicesCards = ({ services }) => {
  return (
    <div className="d-flex justify-content-center w-100">
      <Row className="mx-0">
        {services.map(({ service, path }, index) => {
          return (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={service}
              className="d-flex justify-content-center my-4"
            >
              <Card
                key="light"
                text="dark"
                className="mb-2 py-2 card service_cards"
              >
                <Link to={path} key={service} className="card-body">
                  <Card.Body>
                    <Card.Title className="roboto-medium d-flex justify-content-center">
                      {service}
                    </Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default ServicesCards;

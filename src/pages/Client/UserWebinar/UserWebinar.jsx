import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import holderImage from "../../../Images/img15.png";
import { useEffect, useState } from "react";
import { viewWebinar } from "../../../Services/allAPI";
import { Box, Modal, Typography } from "@mui/material";
import { toast } from "react-toastify";

const UserWebinar = () => {
  const [allWebinars, setAllWebinars] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const getWebinars = async () => {
      const result = await viewWebinar();
      if (result.status === 200) {
        setAllWebinars(result.data.webinar);
      }
    };
    getWebinars();
  }, []);

  const handleBook = () => {
    if (!bookingDetails.name || !bookingDetails.age || !bookingDetails.email) {
      toast.warning("Please fill in all fields");
      return;
    }
    toast.success("Booking Confirmed");
    handleClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const col = () => {
    return (
      <>
        <Col>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={holderImage}
              height={318}
              width={318}
              className="img_holder"
            />
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Title: </ListGroup.Item>
                <ListGroup.Item>Date: </ListGroup.Item>
                <ListGroup.Item>Time: </ListGroup.Item>
                <ListGroup.Item>Speaker:</ListGroup.Item>
                <ListGroup.Item>Description:</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Body className="text-center">
              <Button size="sm">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  };
  return (
    <div>
      <h2 className="my-4 text-center">Webinar</h2>
      <Row className="m-0">
        {allWebinars.length === 0 ? (
          <p>No webinars available.</p>
        ) : (
          allWebinars.map((webinar) => {
            return (
              <Col
                sm={12}
                md={6}
                lg={4}
                className="d-flex justify-content-center mb-4"
              >
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src={webinar.image}
                    height={318}
                    width={318}
                    className="img_holder"
                  />
                  <Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Title: {webinar.title} </ListGroup.Item>
                      <ListGroup.Item>Date: {webinar.date} </ListGroup.Item>
                      <ListGroup.Item>Time: {webinar.time} </ListGroup.Item>
                      <ListGroup.Item>
                        Speaker: {webinar.speaker}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Description: {webinar.description}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                  <Card.Body className="text-center">
                    <Button size="sm" onClick={handleOpen}>
                      Book Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </Row>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="">Booking Details</div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Name"
                aria-label="Username"
                value={bookingDetails.name}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, name: e.target.value })
                }
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Age"
                aria-label="Age"
                value={bookingDetails.age}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, age: e.target.value })
                }
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email"
                aria-label="email"
                value={bookingDetails.email}
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    email: e.target.value,
                  })
                }
              />
            </InputGroup>
            <div className="d-flex justify-content-end gap-3">
              <Button variant="success" size="sm" onClick={handleBook}>
                Book
              </Button>
              <Button variant="danger" size="sm" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default UserWebinar;

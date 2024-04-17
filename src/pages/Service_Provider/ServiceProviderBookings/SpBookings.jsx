import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import "./SpBookings.css";
import {
  acceptBookingRequestByProvider,
  rejectBookingRequestByProvider,
  viewBookingRequestByProvider,
} from "../../../Services/allAPI";
import { toast } from "react-toastify";
import { Box, Tab, Tabs, Typography } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SpBookings = () => {
  const [value, setValue] = useState(0);
  const [pendingRequest, setPendingRequest] = useState([]);
  const [acceptRequest, setAcceptRequest] = useState([]);
  const [rejectRequest, setRejectRequest] = useState([]);
  const [confirmRequest, setConfirmRequest] = useState([]);
  useEffect(() => {
    const getBookingRequests = async () => {
      const token = localStorage.getItem("maternity-token");
      const headers = {
        "Content-type": "application/json",
        Authorization: `${token}`,
      };
      const result = await viewBookingRequestByProvider(headers);
      if (result.status === 200) {
        const pendingResult = result.data.user.filter(
          (request) => request.serviceProviderStatus === "pending"
        );
        const acceptedResult = result.data.user.filter(
          (request) => request.serviceProviderStatus === "accepted"
        );
        const rejectedResult = result.data.user.filter(
          (request) => request.serviceProviderStatus === "rejected"
        );
        const confirmedResult = result.data.user.filter(
          (request) =>
            request.serviceProviderStatus === "accepted" &&
            request.adminStatus === "approved"
        );
        setPendingRequest(pendingResult);
        setAcceptRequest(acceptedResult);
        setConfirmRequest(confirmedResult);
        setRejectRequest(rejectedResult);
      }
    };
    getBookingRequests();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAccept = (data) => {
    const acceptBooking = async () => {
      const token = localStorage.getItem("maternity-token");
      const headers = {
        "Content-type": "application/json",
        Authorization: `${token}`,
      };
      const result = await acceptBookingRequestByProvider(
        { id: data._id },
        headers
      );
      if (result.status === 200) {
        toast.success("Booking accepted");
        setPendingRequest((currentRequests) => {
          return currentRequests.filter((request) => request._id !== data._id);
        });
        setAcceptRequest((currentRequests) => {
          const newData = { ...data, serviceProviderStatus: "accepted" };
          return [...currentRequests, newData];
        });
      }
    };
    acceptBooking();
  };

  const handleDelete = (data) => {
    const rejectBooking = async () => {
      const token = localStorage.getItem("maternity-token");
      const headers = {
        "Content-type": "application/json",
        Authorization: `${token}`,
      };
      const result = await rejectBookingRequestByProvider(
        { id: data._id },
        headers
      );
      if (result.status === 200) {
        toast.success("Booking rejected");
        setPendingRequest((currentRequests) => {
          return currentRequests.filter((request) => request._id !== data._id);
        });
        setRejectRequest((currentRequests) => {
          const newData = { ...data, serviceProviderStatus: "rejected" };
          return [...currentRequests, newData];
        });
      }
    };
    rejectBooking();
  };

  return (
    <div className="booking_page">
      <h1 className="text-center mt-4">Bookings</h1>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Pending" {...a11yProps(0)} />
          <Tab label="Accepted" {...a11yProps(1)} />
          <Tab label="Rejected" {...a11yProps(2)} />
          <Tab label="Confirmed" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Row>
          {pendingRequest?.length === 0 ? (
            <p>No bookings available</p>
          ) : (
            pendingRequest.map((request) => {
              return (
                <Col
                  lg={4}
                  md={6}
                  className="d-flex justify-content-center p-0 mt-4 mb-4 booking_card"
                  key={request._id}
                >
                  <Card style={{ width: "18rem" }} className="card">
                    <ListGroup variant="flush" className="mt-3">
                      <ListGroup.Item className="border-0">
                        <strong>
                          Username:{" "}
                          <strong className="text-capitalize">
                            {request.userName}
                          </strong>
                        </strong>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Service:{" "}
                        <p className="text-capitalize d-inline">
                          {request.service}
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Care Type: {request.typeOfCare}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Starting Time: {request.startingTime}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        End Time: {request.endingTime}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Starting Date: {request.startDate}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        End Date: {request.endDate}
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Footer>
                      <div className="d-flex justify-content-center gap-3">
                        <Button
                          variant="success"
                          onClick={() => handleAccept(request)}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(request)}
                        >
                          Reject
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Row>
          {acceptRequest?.length === 0 ? (
            <p>No bookings available</p>
          ) : (
            acceptRequest.map((request) => {
              return (
                <Col
                  lg={4}
                  md={6}
                  className="d-flex justify-content-center p-0 mt-4 mb-4 booking_card"
                  key={request._id}
                >
                  <Card style={{ width: "18rem" }} className="card">
                    <ListGroup variant="flush" className="mt-3">
                      <ListGroup.Item className="border-0">
                        <strong>
                          Username:{" "}
                          <strong className="text-capitalize">
                            {request.userName}
                          </strong>
                        </strong>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Service:{" "}
                        <p className="text-capitalize d-inline">
                          {request.service}
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Care Type: {request.typeOfCare}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Starting Time: {request.startingTime}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        End Time: {request.endingTime}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Starting Date: {request.startDate}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        End Date: {request.endDate}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        AdminStatus: {request.adminStatus}
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Footer>
                      <p className="text-success text-center">Accepted</p>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Row>
          {rejectRequest?.length === 0 ? (
            <p>No bookings available</p>
          ) : (
            rejectRequest.map((request) => {
              return (
                <Col
                  lg={4}
                  md={6}
                  className="d-flex justify-content-center p-0 mt-4 mb-4 booking_card"
                  key={request._id}
                >
                  <Card style={{ width: "18rem" }} className="card">
                    <ListGroup variant="flush" className="mt-3">
                      <ListGroup.Item className="border-0">
                        <strong>
                          Username:{" "}
                          <strong className="text-capitalize">
                            {request.userName}
                          </strong>
                        </strong>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Service:{" "}
                        <p className="text-capitalize d-inline">
                          {request.service}
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Care Type: {request.typeOfCare}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Starting Time: {request.startingTime}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        End Time: {request.endingTime}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Starting Date: {request.startDate}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        End Date: {request.endDate}
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Footer>
                      <p className="text-danger text-center">Rejected</p>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Row>
          {confirmRequest?.length === 0 ? (
            <p>No bookings available</p>
          ) : (
            confirmRequest.map((request) => {
              return (
                <Col
                  lg={4}
                  md={6}
                  className="d-flex justify-content-center p-0 mt-4 mb-4 booking_card"
                  key={request._id}
                >
                  <Card style={{ width: "18rem" }} className="card">
                    <ListGroup variant="flush" className="mt-3">
                      <ListGroup.Item className="border-0">
                        <strong>
                          Username:{" "}
                          <strong className="text-capitalize">
                            {request.userName}
                          </strong>
                        </strong>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Service:{" "}
                        <p className="text-capitalize d-inline">
                          {request.service}
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Care Type: {request.typeOfCare}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Starting Time: {request.startingTime}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        End Time: {request.endingTime}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        Starting Date: {request.startDate}
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        End Date: {request.endDate}
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Footer>
                      <p className="text-success text-center fs-5">Confirmed</p>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </CustomTabPanel>
    </div>
  );
};

export default SpBookings;

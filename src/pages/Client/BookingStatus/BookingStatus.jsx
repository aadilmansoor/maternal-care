import { useEffect, useState } from "react";
import "./BookingStatus.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { getBookingStatus } from "../../../Services/allAPI";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Payment from "../../../components/Payment/Payment";

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

const BookingStatus = () => {
  const [confirmedRequests, setConfirmedRequests] = useState([]);
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("maternity-token");
    const headers = {
      "Content-type": "application/json",
      Authorization: `${token}`,
    };
    const getAllBookingStatus = async () => {
      const result = await getBookingStatus(headers);
      console.log(result);
      if (result.status === 200) {
        const approvedResult = result.data.user.filter(
          (value) =>
            value.adminStatus === "approved" && value.amountStatus === "unpaid"
        );
        const confirmedResult = result.data.user.filter(
          (value) =>
            value.adminStatus === "approved" && value.amountStatus === "paid"
        );
        const pendingResult = result.data.user.filter(
          (value) =>
            value.adminStatus === "pending" &&
            value.serviceProviderStatus !== "rejected"
        );
        setPendingRequests(pendingResult);
        setConfirmedRequests(confirmedResult);
        setApprovedRequests(approvedResult);
      }
    };
    getAllBookingStatus();
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <h2 className="text-center my-3">Booking Status</h2>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Confirmed" {...a11yProps(0)} />
            <Tab label="Approved" {...a11yProps(1)} />
            <Tab label="Pending" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Row>
            {confirmedRequests.length === 0 ? (
              <p>No bookings available</p>
            ) : (
              confirmedRequests?.map((request) => {
                return (
                  <Col
                    className="d-flex justify-content-center mb-4"
                    sm={12}
                    key={request._id}
                  >
                    <Card style={{ width: "100%", margin: "0 40px" }}>
                      <Card.Body>
                        <Card.Subtitle className="mb-4 text-muted ">
                          Service Provider Name: {request.serviceProviderName}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted ">
                          Care Type: {request.typeOfCare}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted ">
                          Service: {request.service}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Start Time: {request.startingTime}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          End Time: {request.endingTime}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Start Date: {request.startDate}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          End Date: {request.endDate}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Amount: {request.amountPaid}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Service Provider Status:{" "}
                          {request.serviceProviderStatus}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Admin Status: {request.adminStatus}
                        </Card.Subtitle>

                        <div className="text-center">
                          <p className="text-success">
                            <strong className="fs-4">PAID</strong>
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            )}
          </Row>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Row>
            {approvedRequests.length === 0 ? (
              <p>No bookings available</p>
            ) : (
              approvedRequests?.map((request) => {
                return (
                  <Col
                    className="d-flex justify-content-center mb-4"
                    sm={12}
                    key={request._id}
                  >
                    <Card style={{ width: "100%", margin: "0 40px" }}>
                      <Card.Body>
                        <Card.Subtitle className="mb-4 text-muted ">
                          Service Provider Name: {request.serviceProviderName}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted ">
                          Care Type: {request.typeOfCare}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted ">
                          Service: {request.service}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Start Time: {request.startingTime}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          End Time: {request.endingTime}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Start Date: {request.startDate}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          End Date: {request.endDate}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Amount: {request.amountPaid}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Service Provider Status:{" "}
                          {request.serviceProviderStatus}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Admin Status: {request.adminStatus}
                        </Card.Subtitle>

                        <div className="text-center">
                          <Payment
                            item={request}
                            setApprovedRequests={setApprovedRequests}
                            setConfirmedRequests={setConfirmedRequests}
                          />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            )}
          </Row>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Row>
            {pendingRequests.length === 0 ? (
              <p>No bookings available</p>
            ) : (
              pendingRequests?.map((request) => {
                return (
                  <Col
                    className="d-flex justify-content-center mb-4"
                    sm={12}
                    key={request._id}
                  >
                    <Card style={{ width: "100%", margin: "0 40px" }}>
                      <Card.Body>
                        <Card.Subtitle className="mb-4 text-muted ">
                          Service Provider Name: {request.serviceProviderName}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted ">
                          Care Type: {request.typeOfCare}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted ">
                          Service: {request.service}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Start Time: {request.startingTime}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          End Time: {request.endingTime}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Start Date: {request.startDate}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          End Date: {request.endDate}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Amount: {request.amountPaid}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Service Provider Status:{" "}
                          {request.serviceProviderStatus}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4 text-muted">
                          Admin Status: {request.adminStatus}
                        </Card.Subtitle>

                        <div className="text-center">
                          <Button size="sm" disabled variant="success">
                            Pay Now
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            )}
          </Row>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default BookingStatus;

import { Button, Card, Col, Row } from "react-bootstrap";
import "./Bookings.css";
import { useEffect, useState } from "react";
import {
  acceptBookingRequestByAdmin,
  viewBookingRequestByAdmin,
} from "../../../Services/allAPI";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { toast } from "react-toastify";
function Bookings() {
  const [value, setValue] = useState(0);
  const [pendingRequest, setPendingRequest] = useState([]);
  const [acceptRequest, setAcceptRequest] = useState([]);
  console.log(pendingRequest);
  console.log(acceptRequest);

  useEffect(() => {
    const getBookingRequests = async () => {
      const result = await viewBookingRequestByAdmin();
      if (result.status === 200) {
        const pendingResult = result.data.user.filter(
          (request) =>
            request.adminStatus === "pending" &&
            request.serviceProviderStatus === "accepted"
        );
        const acceptedResult = result.data.user.filter(
          (request) => request.adminStatus === "approved"
        );
        setPendingRequest(pendingResult);
        setAcceptRequest(acceptedResult);
      }
    };
    getBookingRequests();
  }, []);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAccept = (data) => {
    const requestAccept = async () => {
      const result = await acceptBookingRequestByAdmin({ id: data._id });
      if (result.status === 200) {
        toast.success("Booking approved.");
        setPendingRequest((currentRequests) => {
          return currentRequests.filter((request) => request._id !== data._id);
        });
        setAcceptRequest((currentRequests) => {
          const newData = { ...data, adminStatus: "approved" };
          return [...currentRequests, newData];
        });
      }
    };
    requestAccept();
  };

  return (
    <div className="booking_page">
      <h1 className="text-center my-5">Bookings</h1>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Pending" {...a11yProps(0)} />
          <Tab label="Approved" {...a11yProps(1)} />
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
                  className="d-flex justify-content-center p-0 mt-4 mb-4"
                  key={request._id}
                >
                  <Card style={{ width: "22rem" }} className="card">
                    <ul className="booking_details mt-3">
                      <li className="details_heading">
                        <strong>Service Provider</strong>
                      </li>
                      <li className="">Name: {request.serviceProviderName}</li>
                      <li className="">Location: {request.location}</li>
                      <li className="">Rate/hr: {request.rate}</li>
                      <li className="details_heading">
                        <strong>User Details</strong>
                      </li>
                      <li className="">Name: {request.userName}</li>
                      <li className="">Email: {request.userEmail}</li>
                      <li className="details_heading">
                        <strong>Booking Details</strong>
                      </li>
                      <li className="">Service: {request.service}</li>
                      <li className="">Care Type: {request.typeOfCare}</li>
                      <li className="">
                        Starting Time: {request.startingTime}
                      </li>
                      <li className="">End Time: {request.endingTime}</li>
                      <li className="">Starting Date: {request.startDate}</li>
                      <li className="">End Date: {request.endDate}</li>
                    </ul>
                    <Card.Footer>
                      <div className="d-flex justify-content-center gap-3">
                        <Button
                          variant="success"
                          onClick={() => handleAccept(request)}
                        >
                          Accept
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
                  className="d-flex justify-content-center p-0 mt-4 mb-4"
                  key={request._id}
                >
                  <Card style={{ width: "22rem" }} className="card">
                    <ul className="booking_details mt-3">
                      <li className="details_heading">
                        <strong>Service Provider</strong>
                      </li>
                      <li className="">Name: {request.serviceProviderName}</li>
                      <li className="">Location: {request.location}</li>
                      <li className="">Rate/hr: {request.rate}</li>
                      <li className="details_heading">
                        <strong>User Details</strong>
                      </li>
                      <li className="">Name: {request.userName}</li>
                      <li className="">Email: {request.userEmail}</li>
                      <li className="details_heading">
                        <strong>Booking Details</strong>
                      </li>
                      <li className="">Service: {request.service}</li>
                      <li className="">Care Type: {request.typeOfCare}</li>
                      <li className="">
                        Starting Time: {request.startingTime}
                      </li>
                      <li className="">End Time: {request.endingTime}</li>
                      <li className="">Starting Date: {request.startDate}</li>
                      <li className="">End Date: {request.endDate}</li>
                    </ul>
                    <Card.Footer>
                      <p className="text-success text-center">Approved</p>
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
}

export default Bookings;

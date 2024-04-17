import { Button, Card, Col, Row } from "react-bootstrap";
import "./Bookings.css";
import { useEffect, useState } from "react";
import { viewBookingRequestByAdmin } from "../../../Services/allAPI";
function Bookings() {
  const [bookingRequests, setBookingRequests] = useState([]);
  useEffect(() => {
    const getBookingRequests = async () => {
      const result = await viewBookingRequestByAdmin();
      if (result.status === 200) {
        setBookingRequests(result.data.user);
      }
    };
    getBookingRequests();
  }, []);
  const handleAccept = (id) => {};
  const handleReject = (id) => {};
  return (
    <div className="booking_page">
      <h1 className="text-center my-5">Bookings</h1>
      <Row>
        {bookingRequests?.length === 0 ? (
          <p>No bookings available</p>
        ) : (
          bookingRequests.map((request) => {
            return (
              <Col
                lg={4}
                md={6}
                className="d-flex justify-content-center p-0 mt-4 mb-4"
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
                    <li className="">Starting Time: {request.startingTime}</li>
                    <li className="">End Time: {request.endingTime}</li>
                    <li className="">Starting Date: {request.startDate}</li>
                    <li className="">End Date: {request.endDate}</li>
                  </ul>
                  <Card.Footer>
                    <div className="d-flex justify-content-center gap-3">
                      <Button
                        variant="success"
                        onClick={() => handleAccept(request._id)}
                      >
                        Accept
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleReject(request._id)}
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
    </div>
  );
}

export default Bookings;

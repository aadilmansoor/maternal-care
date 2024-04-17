import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import "./SpBookings.css";
import {
  acceptBookingRequestByProvider,
  rejectBookingRequestByProvider,
  viewBookingRequestByProvider,
} from "../../../Services/allAPI";
import { toast } from "react-toastify";

const SpBookings = () => {
  const [bookingRequests, setBookingRequests] = useState([]);
  console.log(bookingRequests);
  useEffect(() => {
    const getBookingRequests = async () => {
      const token = localStorage.getItem("maternity-token");
      const headers = {
        "Content-type": "application/json",
        Authorization: `${token}`,
      };
      const result = await viewBookingRequestByProvider(headers);
      if (result.status === 200) {
        setBookingRequests(result.data.user);
      }
    };
    getBookingRequests();
  }, []);
  // function col() {
  //   return (
  //     <Col
  //       lg={4}
  //       md={6}
  //       className="d-flex justify-content-center p-0 mt-4 mb-4 booking_card"
  //     >
  //       <Card style={{ width: "18rem" }} className="card">
  //         <ListGroup variant="flush" className="mt-3">
  //           <ListGroup.Item className="border-0">
  //             <strong>Username:</strong>
  //           </ListGroup.Item>
  //           <ListGroup.Item className="border-0">Service:</ListGroup.Item>
  //           <ListGroup.Item className="border-0">Care Type:</ListGroup.Item>
  //           <ListGroup.Item className="border-0">Starting Time:</ListGroup.Item>
  //           <ListGroup.Item className="border-0">End Time:</ListGroup.Item>
  //           <ListGroup.Item className="border-0">Starting Date:</ListGroup.Item>
  //           <ListGroup.Item className="border-0">End Date:</ListGroup.Item>
  //         </ListGroup>
  //         <Card.Footer>
  //           <div className="d-flex justify-content-center gap-3">
  //             <Button variant="success">Accept</Button>
  //             <Button variant="danger">Reject</Button>
  //           </div>
  //         </Card.Footer>
  //       </Card>
  //     </Col>
  //   );
  // }

  const handleAccept = (id) => {
    const acceptBooking = async () => {
      const token = localStorage.getItem("maternity-token");
      const headers = {
        "Content-type": "application/json",
        Authorization: `${token}`,
      };
      const result = await acceptBookingRequestByProvider({ id }, headers);
      if (result.status === 200) {
        toast.success("Booking accepted");
        setBookingRequests((currentRequests) => {
          return currentRequests.map((request) => {
            if (request._id === id) {
              return {
                ...request,
                serviceProviderStatus: "accepted",
              };
            }
            return request;
          });
        });
      }
    };
    acceptBooking();
  };

  const handleDelete = (id) => {
    const rejectBooking = async () => {
      const token = localStorage.getItem("maternity-token");
      const headers = {
        "Content-type": "application/json",
        Authorization: `${token}`,
      };
      const result = await rejectBookingRequestByProvider({ id }, headers);
      if (result.status === 200) {
        toast.success("Booking rejected");
        setBookingRequests((currentRequests) => {
          return currentRequests.map((request) => {
            if (request._id === id) {
              return {
                ...request,
                serviceProviderStatus: "rejected",
              };
            }
            return request;
          });
        });
      }
    };
    rejectBooking();
  };

  return (
    <div className="booking_page">
      <h1 className="text-center mt-4">Bookings</h1>
      <Row>
        {bookingRequests?.length === 0 ? (
          <p>No bookings available</p>
        ) : (
          bookingRequests.map((request) => {
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
                    {request.serviceProviderStatus === "accepted" ? (
                      <p className="text-success text-center">Accepted</p>
                    ) : request.serviceProviderStatus === "rejected" ? (
                      <p className="text-danger text-center">Rejected</p>
                    ) : (
                      <div className="d-flex justify-content-center gap-3">
                        <Button
                          variant="success"
                          onClick={() => handleAccept(request._id)}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(request._id)}
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </Card.Footer>
                </Card>
              </Col>
            );
          })
        )}
        {/* {col()}
        {col()} */}
      </Row>
    </div>
  );
};

export default SpBookings;

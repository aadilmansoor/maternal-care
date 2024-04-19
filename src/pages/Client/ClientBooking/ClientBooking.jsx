import { Button, Form, InputGroup, Modal, Table } from "react-bootstrap";
import "./ClientBooking.css";
import { useEffect, useState } from "react";
import { searchServiceProvider, userBooking } from "../../../Services/allAPI";
import { toast } from "react-toastify";
import {
  calculateDecimalHours,
  daysBetweenDates,
  formatDate,
  formatDateForBooking,
  validateTimeInAndOut,
} from "../../../utils";
import { useNavigate } from "react-router-dom";

const ClientBooking = () => {
  console.log(daysBetweenDates("17-04-2024", "20-04-2024"));
  const [show, setShow] = useState(false);
  const [disableTime, setDisableTime] = useState(true);
  const [listOfServices, setListOfServices] = useState([]);
  const [serviceProviders, setServiceProviders] = useState([]);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [amount, setAmount] = useState(0);
  const [providerDetails, setProviderDetails] = useState({
    typeOfCare: "pre-delivery care",
    service: "caretaker",
    startingTime: "",
    endingTime: "",
    startDate: "",
    endDate: "",
    location: "",
    serviceProviderName: "",
    serviceProviderId: "",
    profile_img: "",
    serviceProviderEmail: "",
    serviceProviderMobile: "",
    rate: "",
    amount: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (
      providerDetails.typeOfCare === "pre-delivery care" ||
      providerDetails.typeOfCare === "post-delivery care"
    ) {
      setListOfServices(["caretaker"]);
      setProviderDetails({
        ...providerDetails,
        service: "caretaker",
        services: "caretaker",
      });
    } else if (providerDetails.typeOfCare === "yoga therapy") {
      setListOfServices(["therapist"]);
      setProviderDetails({
        ...providerDetails,
        service: "therapist",
        services: "therapist",
      });
    } else if (providerDetails.typeOfCare === "doctor support") {
      setListOfServices(["doctor", "nurse"]);
      setProviderDetails({
        ...providerDetails,
        service: "doctor",
        services: "doctor",
      });
    } else {
      setListOfServices([]);
      setProviderDetails({ ...providerDetails, service: "", services: "" });
    }
  }, [providerDetails.typeOfCare]);

  useEffect(() => {
    if (providerDetails.timing === "full day") {
      setProviderDetails({
        ...providerDetails,
        startingTime: "00:00",
        endingTime: "23:59",
      });
      setDisableTime(true);
    } else if (providerDetails.timing === "day") {
      setProviderDetails({
        ...providerDetails,
        startingTime: "09:00",
        endingTime: "17:00",
      });
      setDisableTime(true);
    } else if (providerDetails.timing === "night") {
      setProviderDetails({
        ...providerDetails,
        startingTime: "18:00",
        endingTime: "22:00",
      });
      setDisableTime(true);
    } else if (providerDetails.timing === "custom") {
      setProviderDetails({
        ...providerDetails,
        startingTime: "",
        endingTime: "",
      });
      setDisableTime(false);
    }
  }, [providerDetails.timing]);

  useEffect(() => {
    const fetchServiceProvider = async () => {
      const result = await searchServiceProvider({
        location: providerDetails.location,
        service: providerDetails.service,
      });
      if (result.status === 200) {
        setServiceProviders(result?.data?.searchUser);
      } else {
        searchServiceProvider([]);
      }
    };
    fetchServiceProvider();
  }, [providerDetails.service, providerDetails.location]);

  useEffect(() => {
    const workinghours = calculateDecimalHours(
      providerDetails.startingTime,
      providerDetails.endingTime
    );
    const noOfDays = daysBetweenDates(
      formatDate(providerDetails.startDate),
      formatDate(providerDetails.endDate)
    );
    const amountPaid = providerDetails.rate * workinghours * noOfDays;
    console.log({ amountPaid, rate: providerDetails.rate, workinghours });
    setAmount(amountPaid);
  }, [providerDetails]);

  const handleClose = () => setShow(false);
  const handleBooking = ({
    username,
    location,
    rate,
    profile_img,
    email,
    mobile,
    serviceProviderId,
  }) => {
    if (
      providerDetails.timing === "" ||
      providerDetails.startingTime === "" ||
      providerDetails.endingTime === "" ||
      providerDetails.startDate === "" ||
      providerDetails.endDate === ""
    ) {
      toast.warning("Fill all the details.");
      return;
    }
    if (
      !validateTimeInAndOut(
        providerDetails.startingTime,
        providerDetails.endingTime
      )
    ) {
      toast.warning("Start Time should be earlier end Time");
    }

    setProviderDetails((currentDetails) => {
      return {
        ...currentDetails,
        serviceProviderName: username,
        location,
        rate,
        profile_img,
        serviceProviderEmail: email,
        serviceProviderMobile: mobile,
        serviceProviderId,
      };
    });
    setShow(true);
  };

  const handleConfirm = async () => {
    setButtonDisable(true);
    const token = localStorage.getItem("maternity-token");
    const headers = {
      "Content-type": "application/json",
      Authorization: `${token}`,
    };
    const workinghours = calculateDecimalHours(
      providerDetails.startingTime,
      providerDetails.endingTime
    );
    const noOfDays = daysBetweenDates(
      formatDate(providerDetails.startDate),
      formatDate(providerDetails.endDate)
    );
    const amountPaid = providerDetails.rate * workinghours * noOfDays;

    console.log({ rate: providerDetails.rate, workinghours, noOfDays });
    const result = await userBooking(
      {
        ...providerDetails,
        startDate: formatDateForBooking(providerDetails.startDate),
        endDate: formatDateForBooking(providerDetails.endDate),
        amountPaid: parseInt(amountPaid),
        workinghours,
      },
      headers
    );
    if (result.status === 200) {
      toast.success("Submitted. Wait for confirmation");
      navigate("/user");
    } else {
      toast.error("Oops! Something went wrong.");
      setButtonDisable(false);
    }
  };

  return (
    <>
      <h2 className="appointment mb-4 mt-3">Book Appointment</h2>
      <div className="container_group">
        <div className="mb-2 d-flex gap-2 input_group">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) =>
              setProviderDetails({
                ...providerDetails,
                typeOfCare: e.target.value,
              })
            }
            className="text-capitalize"
          >
            <option value="pre-delivery care">Pre-delivery Care</option>
            <option value="post-delivery care">Post-delivery Care</option>
            <option value="yoga therapy">Yoga Therapy</option>
            <option value="doctor support">Doctor Support</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) =>
              setProviderDetails({
                ...providerDetails,
                service: e.target.value,
                services: e.target.value,
              })
            }
            className="text-capitalize"
          >
            {listOfServices.map((value) => {
              return (
                <option key={value} value={value} className="text-capitalize">
                  {value}
                </option>
              );
            })}
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) =>
              setProviderDetails({ ...providerDetails, timing: e.target.value })
            }
          >
            <option>Select Timing</option>
            <option value="full day">Full Day</option>
            <option value="day">Day</option>
            <option value="night">Night</option>
            <option value="custom">Custom</option>
          </Form.Select>
        </div>
        <div className="mb-2 d-flex gap-2 input_group">
          <input
            className=" form-control "
            type="time"
            value={providerDetails.startingTime}
            onChange={(e) =>
              setProviderDetails({
                ...providerDetails,
                startingTime: e.target.value,
              })
            }
            disabled={disableTime}
          />
          <input
            className=" form-control "
            type="time"
            value={providerDetails.endingTime}
            onChange={(e) =>
              setProviderDetails({
                ...providerDetails,
                endingTime: e.target.value,
              })
            }
            disabled={disableTime}
          />
          <input
            className=" form-control "
            type="date"
            value={providerDetails.startDate}
            onChange={(e) =>
              setProviderDetails({
                ...providerDetails,
                startDate: e.target.value,
              })
            }
          />
          <input
            className=" form-control "
            type="date"
            value={providerDetails.endDate}
            onChange={(e) =>
              setProviderDetails({
                ...providerDetails,
                endDate: e.target.value,
              })
            }
          />
        </div>
        <InputGroup className="search_input mb-5">
          <Form.Control
            placeholder="Search By Location"
            aria-label="Search"
            value={providerDetails.location}
            onChange={(e) =>
              setProviderDetails({
                ...providerDetails,
                location: e.target.value,
              })
            }
          />
          <InputGroup.Text id="basic-addon1">
            <i className="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="table1">
        {serviceProviders?.filter((provider) =>
          provider.location.includes(providerDetails.location)
        ).length > 0 ? (
          <Table responsive bordered hover>
            <thead className="p-2">
              <tr>
                <th>
                  <strong>Name</strong>
                </th>
                <th>
                  <strong>Location</strong>
                </th>
                <th>
                  <strong>Rate/hr</strong>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {serviceProviders
                ?.filter((provider) =>
                  provider.location.includes(providerDetails.location)
                )
                .map((provider) => {
                  return (
                    <tr key={provider._id}>
                      <td>{provider.username}</td>
                      <td>{provider.location}</td>
                      <td>{provider.rate}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => handleBooking(provider)}
                        >
                          Book
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        ) : (
          <p className="text-center">No service providers found</p>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="provider_details">
            <li className="provider_head">
              <strong>Service Provider Details</strong>
            </li>
            <li>Name: {providerDetails.serviceProviderName}</li>
            <li>Location: {providerDetails.location}</li>
            <li>Rate/hr: {providerDetails.rate}</li>
            <li>
              Treatment Type:{" "}
              <span className="text-capitalize">
                {providerDetails.typeOfCare}
              </span>
            </li>
            <li>
              Service:{" "}
              <span className="text-capitalize">{providerDetails.service}</span>
            </li>
            <li>
              Timing:{" "}
              <span className="text-capitalize">{providerDetails.timing}</span>
            </li>
            <li>Start Time: {providerDetails.startingTime}</li>
            <li>End Time: {providerDetails.endingTime} </li>
            <li>Start Date: {formatDate(providerDetails.startDate)} </li>
            <li>End Date: {formatDate(providerDetails.endDate)} </li>
            <li>Amount: {amount} </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={handleClose}
            disabled={buttonDisable}
          >
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={(e) => handleConfirm(e)}
            disabled={buttonDisable}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClientBooking;

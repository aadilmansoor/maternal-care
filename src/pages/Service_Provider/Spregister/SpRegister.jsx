import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { registerProviderAPI } from "../../../Services/allAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import cover from "../../../Images/img16.jpg";
import "./SpRegister.css";

function SpRegister() {
  const navigate = useNavigate();
  const [providerDetails, setProviderDetails] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
    service: "",
    specialization: "",
    qualification: "",
    location:"",
    exp_year: "",
    experience_crt: {},
    rate: "",
  });
  console.log(providerDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registerProviderAPI(providerDetails);
    console.log(result);
    if (result.status === 200) {
      toast.success("Registration Successful", {
        autoClose: 2000,
      });
      navigate("/");
    } else {
      toast.warning(result?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
        <Container>
          <Row className="rounded shadow">
            <Col md={6}>
              <Row>
                <Col
                  md={12}
                  className="d-flex justify-content-center align-items-center mt-5 mb-5 flex-column"
                >
                  <h3 className=" roboto-bold text-center mt-3 text-primary">
                    Service Provider Registration
                  </h3>
                  <Form onSubmit={handleSubmit}>
                    <input
                      style={{ borderRadius: "50px" }}
                      type="text"
                      className="form-control mt-3"
                      placeholder="Username"
                      required
                      onChange={(e) =>
                        setProviderDetails({
                          ...providerDetails,
                          username: e.target.value,
                        })
                      }
                    />
                    <input
                      style={{ borderRadius: "50px" }}
                      type="email"
                      className="form-control mt-3"
                      placeholder="Email Address"
                      required
                      onChange={(e) =>
                        setProviderDetails({
                          ...providerDetails,
                          email: e.target.value,
                        })
                      }
                    />
                    <input
                      style={{ borderRadius: "50px" }}
                      type="password"
                      className="form-control mt-3"
                      placeholder="Password"
                      required
                      onChange={(e) =>
                        setProviderDetails({
                          ...providerDetails,
                          password: e.target.value,
                        })
                      }
                    />
                    <input
                      style={{ borderRadius: "50px" }}
                      type="tel"
                      className="form-control mt-3"
                      placeholder="Phone Number"
                      required
                      onChange={(e) =>
                        setProviderDetails({
                          ...providerDetails,
                          mobile: e.target.value,
                        })
                      }
                    />
                    <Form.Select className="choose mt-4 mb-4" aria-label="Default select example"
                    onChange={(e) =>
                      setProviderDetails({
                        ...providerDetails,
                        service: e.target.value,
                      })
                    }>
                      <option>Choose Service</option>
                      <option value="doctor">Doctor</option>
                      <option value="therapist">Therapist</option>
                      <option value="caretaker">Caretaker</option>
                      <option value="nurse">Nurse</option>


                    </Form.Select>
                    <input
                      type="text"
                      placeholder="Specialization"
                      style={{ borderRadius: "50px" }}
                      className="form-control mb-3 mt-2"
                      required
                      onChange={(e) =>
                        setProviderDetails({
                          ...providerDetails,
                          specialization: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Qualification"
                      style={{ borderRadius: "50px" }}
                      className="form-control mb-3 mt-2"
                      required
                      onChange={(e) =>
                        setProviderDetails({
                          ...providerDetails,
                          qualification: e.target.value,
                        })
                      }
                    />
                     <input
                      type="text"
                      placeholder="Location"
                      style={{ borderRadius: "50px" }}
                      className="form-control mb-3 mt-2"
                      required
                      onChange={(e) =>
                        setProviderDetails({
                          ...providerDetails,
                          location: e.target.value,
                        })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Experience Year"
                      style={{ borderRadius: "50px" }}
                      className="form-control mb-3 mt-2"
                      required
                      onChange={(e) =>
                        setProviderDetails({
                          ...providerDetails,
                          exp_year: e.target.value,
                        })
                      }
                    />
                    <Form.Group controlId="formFile" className="mb-3 w-100">
                      <Form.Label className="ms-2">
                        Experience Certificate
                      </Form.Label>
                      <Form.Control
                        type="file"
                        accept=".pdf"
                        required
                        style={{ borderRadius: "50px" }}
                        onChange={(e) =>
                          setProviderDetails({
                            ...providerDetails,
                            experience_crt: e.target.files[0],
                          })
                        }
                      />
                    </Form.Group>
                    <input
                      type="rate"
                      placeholder="Rate"
                      required
                      style={{ borderRadius: "50px" }}
                      className="form-control mb-3 mt-2"
                      onChange={(e) =>
                        setProviderDetails({
                          ...providerDetails,
                          rate: e.target.value,
                        })
                      }
                    />
                    <button
                      type="submit"
                      className="w-100 mt-3 btn btn-danger"
                      style={{ borderRadius: "50px" }}
                    >
                      REGISTER
                    </button>
                  </Form>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="mt-5 spimage">
              <img
                className="  mb-3"
                src={cover}
                alt="service provider2"
                style={{ height: "700px", width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SpRegister;

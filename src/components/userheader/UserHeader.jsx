import "./userHeader.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Col, Form, InputGroup, Nav, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/img2.png";
import { toast } from "react-toastify";
import { uploadProviderImage } from "../../Services/allAPI";
import { useUserContext } from "../../context/UserContext";

function UserHeader({ role = "User" }) {
  const [image, setImage] = useState({
    imagePreview:
      "https://tse3.mm.bing.net/th?id=OIP.2hAVCZRMcBjsE8AGQfWCVQHaHa&pid=Api&P=0&h=180",
  });
  const [profileDetails, setProfileDetails] = useState({
    email: "",
    password: "",
    img: "",
  });
  const [showRight, setShowRight] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user, provider } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (role === "provider") {
      if (provider.imageUrl !== "") {
        setImage({
          imagePreview: provider.imageUrl,
        });
      }
    }
  }, [user, provider]);

  const handleCloseRight = () => setShowRight(false);
  const handleShowRight = () => setShowRight(true);

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("maternity-token");
    localStorage.removeItem("maternity-role");
    localStorage.removeItem("serviceProviderId");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        setImage({
          ...image,
          imagePreview: reader.result,
          file: file,
        });
      };
      reader.readAsDataURL(file);
      setProfileDetails({
        ...profileDetails,
        profile_image: file,
      });
    }
  };

  const handleSubmit = (e) => {
    console.log(profileDetails.profile_image);
    e.preventDefault();
    if (
      !profileDetails.email ||
      !profileDetails.password ||
      !profileDetails.profile_image
    ) {
      toast.warning("Please fill all the details.");
      return;
    }

    const uploadData = async () => {
      try {
        const result = await uploadProviderImage(profileDetails);
        if (result.status === 200) {
          toast.success("Photo updated.");
          setProfileDetails({ ...profileDetails, email: "", password: "" });
        }
      } catch (error) {
        console.log(error);
      }
    };
    uploadData();
  };

  return (
    <>
      <div className="top_nav" style={{ width: "100%" }}>
        <Row className="mx-0 py-1">
          <Col
            className={`py-1 ${
              role === "User" || role === "provider" ? "drawer_bars" : "d-none"
            }`}
          >
            <div className="d-flex align-items-center h-100">
              <span className="p-2 rounded-2" onClick={handleShow}>
                <i className="fa-solid fa-bars fa-xl"></i>
              </span>
            </div>
          </Col>
          <Col
            className={`py-1 ${
              role === "User" || role === "provider" ? "logo_bars" : ""
            }`}
          >
            <div className="d-flex align-items-center h-100">
              <Link
                to={
                  role === "Admin"
                    ? "/admin"
                    : role === "provider"
                    ? "/service-provider"
                    : "/user"
                }
                className="ms-3"
              >
                <img
                  src={logo}
                  className="rounded-circle bg-dark object-fit-contain logo-container"
                  alt="logo"
                />
              </Link>
              <a
                href={`${
                  role === "User"
                    ? "/user/webinar"
                    : "/service-provider/webinar"
                }`}
                className={`ms-4 roboto-regular fs-5 text-decoration-none text-white me-5 ${
                  role !== "User" && role !== "provider" ? "d-none" : ""
                }`}
              >
                Webinar
              </a>
              <a
                href={`${
                  role === "User" ? "/user/blog" : "/service-provider/blog"
                }`}
                className={`roboto-regular fs-5 text-decoration-none text-white me-5 ${
                  role !== "User" && role !== "provider" ? "d-none" : ""
                }`}
              >
                Blog
              </a>
              <a
                href={`${
                  role === "User" ? "/user/blog" : "/service-provider/blog"
                }`}
                className={`roboto-regular fs-5 text-decoration-none text-white me-4 ${
                  role !== "User" && role !== "provider" ? "d-none" : ""
                }`}
              >
                Emergency Support
              </a>
            </div>
          </Col>

          <Col className=" d-flex justify-content-end align-items-center py-1">
            <div className=" d-flex align-items-center justify-content-center me-3">
              {role === "Admin" ? (
                <Button variant="danger" onClick={(e) => handleLogOut(e)}>
                  Log Out
                </Button>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn d-flex h-100 align-items-center w-100"
                    onClick={handleShowRight}
                  >
                    <img
                      style={{ borderRadius: "100%" }}
                      src={image.imagePreview}
                      alt="profile"
                      className="rounded-full"
                      width={50}
                      height={50}
                    />
                  </button>
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="bg-dark text-white drawer_bars"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div className="d-flex align-items-center h-100">
              <Link
                to={
                  role === "Admin"
                    ? "/admin"
                    : role === "provider"
                    ? "/service-provider"
                    : "/user"
                }
                className="ms-3"
              >
                <img
                  src={logo}
                  className="rounded-circle bg-dark object-fit-contain logo-container_canvas"
                  alt="logo"
                />
              </Link>
              <h3>Maternal Care</h3>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link
              href={`${
                role === "User" ? "/user/webinar" : "/service-provider/webinar"
              }`}
              className="fs-5 bg-white mb-1 rounded-2"
            >
              <span className="w-100 border-1 bg-white text-dark">Webinar</span>
            </Nav.Link>
            <Nav.Link
              href={`${
                role === "User" ? "/user/blog" : "/service-provider/blog"
              }`}
              className="fs-5 bg-white mb-1 text-dark rounded-2"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href={`${
                role === "User" ? "/user/blog" : "/service-provider/blog"
              }`}
              className="fs-5 bg-white mb-1 text-dark rounded-2 text-nowrap"
            >
              Emergency Support
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas
        show={showRight}
        onHide={handleCloseRight}
        placement="end"
        className="overflow-y-auto"
      >
        <Offcanvas.Header className="bg-dark d-flex" closeButton>
          <Offcanvas.Title className="text-white">
            {role === "provider" ? "Service Provider" : role} Profile
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark position-relative canvas_container">
          <div
            className="ms-5 mb-5"
            style={{
              backgroundColor: "black",
              height: "400px",
              width: "300px",
              borderRadius: "5%",
            }}
          >
            {role === "provider" ? (
              <>
                <div className="d-flex align-items-center justify-content-center mt-4">
                  <label htmlFor="admin_profile">
                    <input
                      id="admin_profile"
                      name="profile"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => handleImageChange(e)}
                      accept=".jpg,.jpeg,.png"
                    />
                    <img
                      className="mt-4"
                      src={image.imagePreview}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                      alt="profile"
                    />
                  </label>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <p className="text-white">ADD PICTURE</p>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-2 rounded-5">
                  <InputGroup className="mb-3 mx-4">
                    <Form.Control
                      placeholder="Email"
                      aria-label="Username"
                      value={profileDetails.email}
                      onChange={(e) =>
                        setProfileDetails({
                          ...profileDetails,
                          email: e.target.value,
                        })
                      }
                    />
                  </InputGroup>
                </div>

                <div className="d-flex align-items-center justify-content-center mt-2 rounded-5">
                  <InputGroup className="mb-3 mx-4">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                      value={profileDetails.password}
                      onChange={(e) =>
                        setProfileDetails({
                          ...profileDetails,
                          password: e.target.value,
                        })
                      }
                    />
                  </InputGroup>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button
                    className="btn btn-info"
                    style={{ borderStyle: "dotted" }}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Update Profile
                  </button>
                </div>
                <div className="position-absolute bottom-0 text-center  btn_contain mt-5 mb-5">
                  <Button variant="danger" onClick={(e) => handleLogOut(e)}>
                    Log Out
                  </Button>
                </div>
              </>
            ) : role === "User" ? (
              <>
                <Form className="mx-3 pt-5">
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="text-white">Username</Form.Label>
                    <Form.Control
                      type="text"
                      value={user.username}
                      className="text-capitalize"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control type="text" value={user.email} />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="text-white">Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      className="text-capitalize"
                      value={user.phone}
                    />
                  </Form.Group>
                </Form>
                <div className="position-absolute bottom-0 text-center  btn_contain mt-5 mb-5">
                  <Button variant="danger" onClick={(e) => handleLogOut(e)}>
                    Log Out
                  </Button>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default UserHeader;

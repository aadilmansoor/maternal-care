import "./userHeader.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/img2.png";
import { toast } from "react-toastify";
import { uploadProviderImage } from "../../Services/allAPI";

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

  const navigate = useNavigate();

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
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    uploadData();
  };

  return (
    <>
      <div className="top_nav" style={{ width: "100%" }}>
        <Row className="mx-0">
          <Col className="py-1">
            <div className="d-flex align-items-center h-100">
              <Link
                to={
                  role === "admin"
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
            </div>
          </Col>

          <Col className=" d-flex justify-content-end align-items-center py-1">
            <a
              href="/user/webinar"
              className={`roboto-regular fs-5 text-decoration-none text-white me-4 ${
                role !== "User" ? "d-none" : ""
              }`}
            >
              Webinar
            </a>
            <a
              href="/user/blog"
              className={`roboto-regular fs-5 text-decoration-none text-white me-4 ${
                role !== "User" ? "d-none" : ""
              }`}
            >
              Blog
            </a>
            <div className=" d-flex align-items-center justify-content-center me-3">
              <button type="button" className="btn" onClick={handleShowRight}>
                <h1 className=" text-dark me-2 ">
                  <i className="fa-solid fa-circle-user fa-lg"></i>
                </h1>
              </button>
            </div>
          </Col>
        </Row>
      </div>

      <Offcanvas
        show={showRight}
        onHide={handleCloseRight}
        placement="end"
        className="overflow-y-auto"
      >
        <Offcanvas.Header className="bg-dark d-flex" closeButton>
          <Offcanvas.Title className="text-white">
            {role} Profile
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
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default UserHeader;

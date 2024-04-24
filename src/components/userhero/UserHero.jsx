import { Col, Row } from "react-bootstrap";
import "./userHero.css";
import userHero from "../../Images/user-hero.jpg";
import { useUserContext } from "../../context/UserContext";

const UserHero = () => {
  const { user } = useUserContext();
  return (
    <Row className="mx-3 my-5">
      <Col sm={12} md={6}>
        <img
          src={userHero}
          alt="user-hero"
          className="object-fit-contain w-100"
        />
      </Col>
      <Col sm={12} md={6} className="text-center">
        <h3 className="fs-1 poppins-regular mt-3 mb-5 welcome-user">
          Welcome, <span className="text-capitalize">{user.username}</span>
        </h3>
        <p className="fs-5 poppins-light mb-3">
          Empowering mothers with trusted information, support, and resources
          throughout their pregnancy journey.
        </p>
        <p className="fs-5 poppins-light">
          Our website offers a range of services including yoga therapy,
          pre-delivery care, doctors support, and much more.
        </p>
      </Col>
    </Row>
  );
};
export default UserHero;

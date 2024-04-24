import { Col, Row } from "react-bootstrap";
import providerhero from "../../Images/providerhero.jpeg";
import { useUserContext } from "../../context/UserContext";

const ProviderHero = () => {
  const { provider } = useUserContext();
  return (
    <Row className="mx-3 my-5">
      <Col sm={12} md={6}>
        <img
          src={providerhero}
          alt="user-hero"
          className="object-fit-contain w-100"
        />
      </Col>
      <Col sm={12} md={6} className="text-center">
        <h3 className="fs-1 poppins-regular mt-3 mb-5 welcome-user">
          Welcome, <span className="text-capitalize">{provider.username}</span>
        </h3>
        <p className="fs-5 poppins-light mb-3">
          Empower mothers on their incredible journey with our trusted resources
          and support. Here, you can seamlessly connect with mothers-to-be,
          offering a range of services including yoga therapy, pre-delivery
          care, doctor support, and much more. Together, let's make every step
          of the pregnancy journey as smooth and enriching as possible.
        </p>
      </Col>
    </Row>
  );
};
export default ProviderHero;

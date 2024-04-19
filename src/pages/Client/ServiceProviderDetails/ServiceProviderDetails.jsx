import "./ServiceProviderDetails.css";
import Review from "../../../components/Review/Review";
import ShowReview from "../../../components/ShowReview/ShowReview";
import ServiceProviderInfo from "../../../components/ServiceProviderInfo/ServiceProviderInfo";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewAPI } from "../../../Services/allAPI";

const ServiceProviderDetails = ({ role }) => {
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const serviceProvider = location.state;

  const getReview = async () => {
    const result = await getReviewAPI({
      serviceProviderId: serviceProvider._id,
    });
    if (result.status === 200) {
      setReviews(result.data.user);
    }
  };

  useEffect(() => {
    getReview();
  }, []);
  return (
    <div>
      <ServiceProviderInfo serviceProvider={serviceProvider} />
      <span className={role === "admin" ? "d-none" : ""}>
        <Review getReview={getReview} />
      </span>
      <ShowReview reviews={reviews} />
    </div>
  );
};

export default ServiceProviderDetails;

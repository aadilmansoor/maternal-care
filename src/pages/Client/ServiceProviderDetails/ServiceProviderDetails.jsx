import "./ServiceProviderDetails.css";
import Review from "../../../components/Review/Review";
import ShowReview from "../../../components/ShowReview/ShowReview";
import ServiceProviderInfo from "../../../components/ServiceProviderInfo/ServiceProviderInfo";

const ServiceProviderDetails = () => {
  
  return (
    <div>
      <ServiceProviderInfo/>
      <Review />
      <ShowReview />
    </div>
  );
};

export default ServiceProviderDetails;

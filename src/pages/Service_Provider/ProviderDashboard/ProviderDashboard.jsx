import { serviceProviderServices } from "../../../Constants/serviceList";
import { ProviderHero, ServicesCards } from "../../../components";
import "./ProviderServices.css"

const ProviderDashboard = () => {
  return (
    <div>
      <ProviderHero />
      <h2 className=" services text-center mt-5 mb-3"> Services</h2>
      <ServicesCards services={serviceProviderServices} />
    </div>
  );
};
export default ProviderDashboard;

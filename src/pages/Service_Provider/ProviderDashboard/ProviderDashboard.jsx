import { useEffect } from "react";
import { serviceProviderServices } from "../../../Constants/serviceList";
import { ProviderHero, ServicesCards, UserHeader } from "../../../components";
import "./ProviderServices.css";

const ProviderDashboard = () => {
  useEffect(() => {
    if (
      !localStorage.getItem("maternity-token") &&
      localStorage.getItem("maternity-role") !== "provider"
    ) {
      alert("Please Login");
    }
  }, []);
  return (
    <div>
      <UserHeader role="Service Provider" />
      <ProviderHero />
      <h2 className=" services text-center mt-5 mb-3"> Services</h2>
      <ServicesCards services={serviceProviderServices} />
    </div>
  );
};
export default ProviderDashboard;

import { useEffect } from "react";
import { serviceProviderServices } from "../../../Constants/serviceList";
import { ProviderHero, ServicesCards} from "../../../components";
import "./ProviderServices.css";
import { daysBetweenDates } from "../../../utils";

const ProviderDashboard = () => {
  console.log(daysBetweenDates("28-01-2024", "02-02-2024"));
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
      <ProviderHero />
      <h2 className=" services text-center mt-5 mb-3"> Services</h2>
      <ServicesCards services={serviceProviderServices} />
    </div>
  );
};
export default ProviderDashboard;

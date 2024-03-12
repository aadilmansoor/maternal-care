import { UserHero, UserHeader, ServicesCards } from "../../../components";
import { userServices } from "../../../Constants/serviceList";

const ClientDashboard = () => {
  return (
    <section className="text-center">
      <UserHeader />
      <UserHero />
      <h1 className="roboto-bold text-center mt-5 mb-3">Our Services</h1>
      <ServicesCards services={userServices} />
    </section>
  );
};
export default ClientDashboard;

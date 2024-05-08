import React, { useEffect, useState } from "react";
import EmergencyTable from "../../../components/EmergencyTable/EmergencyTable";
import { getEmergencyAPI } from "../../../Services/allAPI";

const EmergencySupport = () => {
  const [allContacts, setAllContacts] = useState([]);

  const getEmergency = async () => {
    const result = await getEmergencyAPI();
    console.log({ result });
    if (result.status === 200) {
      setAllContacts(result.data.emergency_details);
    }
  };
  useEffect(() => {
    getEmergency();
  }, []);

  return (
    <div className="my-5 text-center">
      <EmergencyTable allContacts={allContacts} />
    </div>
  );
};

export default EmergencySupport;

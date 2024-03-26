import { Button } from "react-bootstrap";
import "./MarkAttendance.css";
import { useState } from "react";
import {
  calculateDecimalHours,
  formatDate,
  validateTimeInAndOut,
} from "../../../utils";
import { toast } from "react-toastify";
import { serviceProviderMarkAttendance } from "../../../Services/allAPI";

const MarkAttendance = () => {
  const [dateField, setDateField] = useState({
    date: "",
    time_in: "",
    time_out: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, time_in, time_out } = dateField;
    if (!date || !time_in || !time_out) {
      toast.warning("Please fill in all details.");
      return;
    }
    if (!validateTimeInAndOut(dateField.time_in, dateField.time_out)) {
      toast.warning("Time in should be earlier than Time out.");
      return;
    }

    const formattedDate = formatDate(date);
    const workingHours = calculateDecimalHours(time_in, time_out);
    const serviceProviderId = localStorage.getItem("serviceProviderId");

    const uploadData = async () => {
      const result = await serviceProviderMarkAttendance({
        date: formattedDate,
        time_in,
        time_out,
        workingHours,
        serviceProviderId,
        present: true,
      });
      console.log(result);
    };
    uploadData();
  };

  return (
    <div style={{ minHeight: "62vh" }}>
      <h2 className="text-center mt-5 mb-4">Mark Attendance</h2>
      <div className=" d-flex justify-content-center mt-4">
        <div className="text-end date-time_container mt-4">
          <input
            type="date"
            className="form-control mb-3"
            value={dateField.date}
            onChange={(e) =>
              setDateField({ ...dateField, date: e.target.value })
            }
          />
          <input
            type="time"
            className="form-control mb-3"
            value={dateField.time_in}
            onChange={(e) =>
              setDateField({ ...dateField, time_in: e.target.value })
            }
          />
          <input
            type="time"
            className="form-control mb-3"
            value={dateField.time_out}
            onChange={(e) =>
              setDateField({ ...dateField, time_out: e.target.value })
            }
          />
          <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
        </div>
      </div>
    </div>
  );
};
export default MarkAttendance;

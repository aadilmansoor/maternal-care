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
      const token = localStorage.getItem("maternity-token");
      const headers = {
        "Content-type": "application/json",
        Authorization: `${token}`,
      };
      const result = await serviceProviderMarkAttendance(
        {
          date: formattedDate,
          time_in,
          time_out,
          workingHours,
          serviceProviderId,
          present: true,
        },
        headers
      );
      if(result.status===200){
        toast.success("Marked attendance")
      }
    };
    uploadData();
  };

  return (
    <div style={{ minHeight: "62vh" }}>
      <h2 className="text-center mt-5 mb-4">Mark Attendance</h2>
      <div className=" d-flex justify-content-center mt-4">
        <div className="text-end date-time_container mt-4">
          <label className="text-start w-100 " htmlFor="date">
            Date
          </label>
          <input
            id="date"
            type="date"
            className="form-control mb-4"
            value={dateField.date}
            onChange={(e) =>
              setDateField({ ...dateField, date: e.target.value })
            }
          />
          <label className="text-start w-100 " htmlFor="time-in">
            Time In
          </label>

          <input
            id="time-in"
            type="time"
            className="form-control mb-4"
            value={dateField.time_in}
            onChange={(e) =>
              setDateField({ ...dateField, time_in: e.target.value })
            }
          />
          <label className="text-start w-100 " htmlFor="time-out">
            Time Out
          </label>

          <input
            id="time-out"
            type="time"
            className="form-control mb-4"
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

import { useEffect, useState } from "react";
import { months, years } from "../../../Constants/date";
import { Form } from "react-bootstrap";
import { viewSalaryAPI } from "../../../Services/allAPI";

function SalaryPayment() {
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("2024");
  const [salaryDetails, setSalaryDetails] = useState({});

  useEffect(() => {
    const getPayment = async () => {
      const serviceProviderId = localStorage.getItem("serviceProviderId");
      const result = await viewSalaryAPI({ serviceProviderId, month, year });
      setSalaryDetails(result.data);
    };
    getPayment();
  }, [month, year]);
  return (
    <>
      <div className="d-flex justify-content-center mt-5 ">
        <div className="d-flex gap-3 date-pickers mb-3 ">
          <Form.Select
            aria-label="month"
            onChange={(e) => setMonth(e.target.value)}
          >
            {months.map(({ month, value }) => {
              return (
                <option key={month} value={value}>
                  {month}
                </option>
              );
            })}
          </Form.Select>
          <Form.Select
            aria-label="year"
            onChange={(e) => setYear(e.target.value)}
          >
            {years.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </Form.Select>
        </div>
      </div>
      <div className="align mb-5">
        <div className="form-cntrl">
          <Form.Label htmlFor="username" className="mt-3">
            Working hours:
          </Form.Label>
          <Form.Control
            type="text"
            id="working_hours"
            defaultValue={salaryDetails?.workingHours}
            aria-label="Disabled input example"
            readOnly
          />
          <Form.Label htmlFor="Email" className="mt-3">
            {" "}
            Total Amount:
          </Form.Label>
          <Form.Control
            type="text"
            id="salary"
            defaultValue={salaryDetails?.totalSalary}
            aria-label="Disabled input example"
            readOnly
          />
          <Form.Label htmlFor="Phonenumber" className="mt-3">
            Amount Recieved:
          </Form.Label>
          <Form.Control
            id="Phonenumber"
            type="text"
            aria-label="Disabled input example"
            readOnly
          />
          <Form.Label htmlFor="Service" className="mt-3">
            Amount Remaining:
          </Form.Label>

          <Form.Control
            type="text"
            id="Service"
            aria-label="Disabled input example"
            readOnly
          />
        </div>
      </div>
    </>
  );
}

export default SalaryPayment;

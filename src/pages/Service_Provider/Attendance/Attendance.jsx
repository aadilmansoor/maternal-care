import { Form } from "react-bootstrap";
import { months, years } from "../../../Constants/date";
import "./Attendance.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { serviceProviderShowAttendance } from "../../../Services/allAPI";
import { useLocation } from "react-router-dom";
import { getCurrentMonth, getCurrentYear } from "../../../utils";

const currentMonth = getCurrentMonth();
const currentYear = getCurrentYear();

const Attendance = () => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [data, setData] = useState([]);
  const location = useLocation();
  const serviceProvider = location.state;
  useEffect(() => {
    const fetchData = async () => {
      let serviceProviderId = "";
      if (localStorage.getItem("maternity-role") === "provider") {
        serviceProviderId = localStorage.getItem("serviceProviderId");
      } else {
        serviceProviderId = serviceProvider._id;
      }
      const result = await serviceProviderShowAttendance({
        month,
        year,
        serviceProviderId,
      });
      if (result.status === 200) {
        setData(result.data);
      } else {
        setData([]);
      }
    };
    fetchData();
  }, [month, year]);
  return (
    <div className="d-flex flex-column align-items-center mt-4 container_size">
      <h2 className="text-center mt-5 mb-4 text-capitalize">
        {serviceProvider ? serviceProvider.username + "'s" : ""} Attendance
      </h2>
      <div className="d-flex gap-3 date-pickers mb-3">
        <Form.Select
          aria-label="month"
          value={month}
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
          value={year}
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
      <div className="table_container">
        {data.length > 0 ? (
          <TableContainer component={Paper} className="mt-4 mb-4">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="table_head">
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Time In</TableCell>
                  <TableCell align="right">Time Out</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((attendance) => {
                  return (
                    <TableRow
                      key={attendance._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{attendance.date}</TableCell>
                      <TableCell align="right">
                        {attendance.present ? attendance.time_in : "--"}
                      </TableCell>
                      <TableCell align="right">
                        {attendance.present ? attendance.time_out : "--"}
                      </TableCell>
                      <TableCell align="right">
                        {attendance.present ? (
                          <span className="text-success fs-6">Present</span>
                        ) : (
                          <span className="text-danger fs-6">Absent</span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          "No data found"
        )}
      </div>
    </div>
  );
};
export default Attendance;

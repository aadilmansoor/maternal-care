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

const Attendance = () => {
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("2024");
  useEffect(() => {
    const fetchData = () => {
      const result = serviceProviderShowAttendance({ month, year });
      console.log(result);
    };
    fetchData();
  }, [month, year]);
  return (
    <div className="d-flex flex-column align-items-center mt-4 container_size">
      <h2 className="text-center mt-5 mb-4">Attendance</h2>
      <div className="d-flex gap-3 date-pickers mb-3">
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
      <div className="table_container">
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
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>01/03/2025</TableCell>
                <TableCell align="right">09:00AM</TableCell>
                <TableCell align="right">05:00PM</TableCell>
                <TableCell align="right">
                  <span className="text-success fs-6">Present</span>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>01/03/2025</TableCell>
                <TableCell align="right">--</TableCell>
                <TableCell align="right">--</TableCell>
                <TableCell align="right">
                  <span className="text-danger fs-6">Absent</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default Attendance;

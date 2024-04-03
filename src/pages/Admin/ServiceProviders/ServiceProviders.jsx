import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Button, Table } from "react-bootstrap";
import "./ServiceProviders.css";
import { useEffect, useState } from "react";
import { getApprovedServiceProvidersList } from "../../../Services/allAPI";

const ServiceProviders = () => {
  const [serviceProvidersList, setServiceProvidersList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getApprovedServiceProvidersList();
      setServiceProvidersList(result?.data?.response);
    };
    fetchData();
  }, []);

  const handleMoreDetails = (id) => {
    console.log(id);
  };

  const handleAttendance = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h2 className="text-center mt-5 mb-4">Service Providers</h2>
      <div className="">
        <div className="service-providers_container text-nowrap">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Service</TableCell>
                  {/* <TableCell align="right">Location</TableCell> */}
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {serviceProvidersList.map((serviceProvider) => {
                  return (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      key={serviceProvider._id}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="text-capitalize"
                      >
                        {serviceProvider.username}
                      </TableCell>
                      <TableCell align="right" className="text-capitalize">
                        {serviceProvider.service}
                      </TableCell>
                      {/* <TableCell align="right">
                        {serviceProvider.location}
                      </TableCell> */}
                      <TableCell align="right">
                        <span
                          className={`${
                            serviceProvider.status
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {serviceProvider.status ? "Active" : "Inactive"}
                        </span>
                      </TableCell>
                      <TableCell align="right">
                        <div className="btn_container">
                          <Button
                            variant="primary"
                            size="sm"
                            className="me-2"
                            onClick={() =>
                              handleMoreDetails(serviceProvider._id)
                            }
                          >
                            More Details
                          </Button>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() =>
                              handleAttendance(serviceProvider._id)
                            }
                          >
                            See Attendance
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
export default ServiceProviders;

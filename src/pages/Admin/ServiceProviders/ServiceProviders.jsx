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
import { useNavigate } from "react-router-dom";

const ServiceProviders = ({ role }) => {
  const [serviceProvidersList, setServiceProvidersList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getApprovedServiceProvidersList();
      setServiceProvidersList(result?.data?.response);
    };
    fetchData();
  }, []);

  const handleMoreDetails = (serviceProvider) => {
    if (role === "user") {
      navigate("/user/service-provider-details", {
        state: serviceProvider,
      });
    } else {
      navigate("/admin/service-provider-details", {
        state: serviceProvider,
      });
    }
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
                  <TableCell align="right">Specialization</TableCell>
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
                        {serviceProvider.specialization}
                      </TableCell>
                      <TableCell align="right">
                        <span className="btn_container">
                          <Button
                            variant="primary"
                            size="sm"
                            className="me-2"
                            onClick={() => handleMoreDetails(serviceProvider)}
                          >
                            More Details
                          </Button>
                          {/* <Button
                            variant="primary"
                            size="sm"
                            onClick={() =>
                              handleAttendance(serviceProvider._id)
                            }
                          >
                            See Attendance
                          </Button> */}
                        </span>
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

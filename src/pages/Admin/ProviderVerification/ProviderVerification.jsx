import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  approveRequest,
  getProviderRequest,
  rejectRequest,
} from "../../../Services/allAPI";
import { toast } from "react-toastify";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ProviderVerification = () => {
  const [requestList, setRequestList] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  console.log(requestList);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProviderRequest();
      setRequestList(result?.data?.response);
    };
    fetchData();
  }, []);

  const handleAccept = async (data, index) => {
    setDisabledButtons([...disabledButtons, index]);
    const result = await approveRequest(data);
    if (result.status === 200) {
      toast.success("Request approved.");
      setDisabledButtons((currentButtons) =>
        currentButtons.filter((button) => button !== index)
      );
      const newList = requestList.filter(
        (provider) => provider._id !== data._id
      );
      setRequestList(newList);
    } else {
      toast.error("Oops! Something went wrong.");
      setDisabledButtons((currentButtons) =>
        currentButtons.filter((button) => button !== index)
      );
    }
  };

  const handleReject = async (email, data, index) => {
    setDisabledButtons([...disabledButtons, index]);
    const result = await rejectRequest({ email });
    if (result.status === 200) {
      toast.success("Request Rejected");
      const newList = requestList.filter(
        (provider) => provider._id !== data._id
      );
      setRequestList(newList);
    } else {
      toast.error("Oops! Something went wrong.");
      setDisabledButtons((currentButtons) =>
        currentButtons.filter((button) => button !== index)
      );
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h3 className="mb-3">Service Provider Verification</h3>
        <Container>
          {requestList?.length === 0 ? (
            <p className="mt-5 text-center">No approval request pending</p>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Service</TableCell>
                    <TableCell align="right">Specialization</TableCell>
                    <TableCell align="right">Qualification</TableCell>
                    <TableCell align="right">Rate</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {requestList?.map((request, index) => {
                    return (
                      <TableRow
                        hover
                        key={request._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {request.username}
                        </TableCell>
                        <TableCell align="right">{request.email}</TableCell>
                        <TableCell align="right">{request.service}</TableCell>
                        <TableCell align="right">
                          {request.specialization}
                        </TableCell>
                        <TableCell align="right">
                          {request.qualification}
                        </TableCell>
                        <TableCell align="right">{request.rate}</TableCell>
                        <TableCell align="right">
                          <div className="d-flex w-100 gap-2 justify-content-end">
                            {" "}
                            <button
                              className="btn btn-success"
                              onClick={() => handleAccept(request, index)}
                              disabled={disabledButtons.includes(index)}
                            >
                              Accept
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                handleReject(request.email, request, index)
                              }
                              disabled={disabledButtons.includes(index)}
                            >
                              Reject
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>
      </div>
    </>
  );
};

export default ProviderVerification;

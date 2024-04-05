import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { approveRequest, getProviderRequest } from "../../../Services/allAPI";
import { toast } from "react-toastify";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const ProviderVerification = () => {
  const [requestList, setRequestList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProviderRequest();
      setRequestList(result?.data?.response);
    };
    fetchData();
  }, []);

  const handleAccept = async (data) => {
    const result = await approveRequest(data);
    if (result.status === 200) {
      toast.success("Approved");
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
            // <Table responsive>
            //   <thead className="p-2">
            //     <tr>
            //       <th>Username</th>
            //       <th>Email</th>
            //       <th>Service</th>
            //       <th>Specialization</th>
            //       <th>Qualification</th>
            //       <th>Rate</th>
            //       <th>Action</th>
            //     </tr>
            //   </thead>
            //   <tbody className="p-2">
            //     {requestList.map((request) => {
            //       return (
            //         <tr key={request.email}>
            //           <td>{request.username}</td>
            //           <td>{request.email}</td>
            //           <td>{request.service}</td>
            //           <td>{request.specialization}</td>
            //           <td>{request.qualification}</td>
            //           <td>{request.rate}</td>
            //           <td className="d-flex">
            //             <button
            //               className="btn btn-success"
            //               onClick={() => handleAccept(request)}
            //             >
            //               Accept
            //             </button>
            //             <button className="btn btn-danger">Reject</button>
            //           </td>
            //         </tr>
            //       );
            //     })}
            //   </tbody>
            // </Table>
            <TableContainer  component={Paper}>
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
                {requestList?.map((request) => {
                  return (
                    <TableRow hover
                    key={request._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {request.username}
                    </TableCell>
                    <TableCell align="right">{request.email}</TableCell>
                    <TableCell align="right">{request.service}</TableCell>
                    <TableCell align="right">{request.specialization}</TableCell>
                    <TableCell align="right">{request.qualification}</TableCell>
                    <TableCell align="right">{request.rate}</TableCell>
                    <TableCell align="right">
                      <div className="d-flex w-100 gap-2 justify-content-end"> <button
                          className="btn btn-success"
                          onClick={() => handleAccept(request)}
                        >
                          Accept
                        </button>
                        <button className="btn btn-danger">Reject</button></div>
                    </TableCell>
                  </TableRow>
                  )
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

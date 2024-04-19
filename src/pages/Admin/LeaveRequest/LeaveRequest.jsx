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
import {
  acceptLeaveRequestByAdmin,
  rejectLeaveRequestByAdmin,
  viewAllLeaveRequests,
} from "../../../Services/allAPI";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

function LeaveRequest() {
  const [pendingRequests, setPendingRequests] = useState([]);
  useEffect(() => {
    const getLeaveRequests = async () => {
      const result = await viewAllLeaveRequests();
      const pendingResults = result.data.allReq.filter(
        (request) => request.status === "pending"
      );
      setPendingRequests(pendingResults);
    };
    getLeaveRequests();
  }, []);

  const handleAccept = (id, row) => {
    const acceptRequest = async () => {
      const result = await acceptLeaveRequestByAdmin(id);
      if (result.status === 200) {
        toast.success("Leave request accepted");
        setPendingRequests((currentRequests) => {
          return currentRequests.filter((request) => request._id !== row._id);
        });
      }
    };
    acceptRequest();
  };

  const handleReject = (id, row) => {
    const rejectRequest = async () => {
      const result = await rejectLeaveRequestByAdmin(id);
      if (result.status === 200) {
        toast.success("Leave request rejected.");
        setPendingRequests((currentRequests) => {
          return currentRequests.filter((request) => request._id !== row._id);
        });
      }
    };
    rejectRequest();
  };

  return (
    <>
      <div className="mx-5 text-center mb-5">
        <h3 className="my-5">Leave Request</h3>
        {pendingRequests.length === 0 ? (
          <p>No requests available</p>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Reason</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingRequests?.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.reason}</TableCell>
                    <TableCell align="right">
                      <div>
                        <Button
                          variant="success"
                          className="me-2"
                          onClick={() => handleAccept({ id: row._id }, row)}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleReject({ id: row._id }, row)}
                        >
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
}

export default LeaveRequest;

import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { approveRequest, getProviderRequest } from "../../../Services/allAPI";
import { ToastContainer, toast } from "react-toastify";

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

  if (requestList.length === 0) {
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h3 className="mb-3">Service Provider Verification</h3>
        <Container>
          {requestList.length === 0 ? (
            <p className="mt-5 text-center">No approval request pending</p>
          ) : (
            <Table responsive>
              <thead className="p-2">
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Service</th>
                  <th>Specialization</th>
                  <th>Qualification</th>
                  <th>Rate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="p-2">
                {requestList.map((request) => {
                  return (
                    <tr key={request.email}>
                      <td>{request.username}</td>
                      <td>{request.email}</td>
                      <td>{request.service}</td>
                      <td>{request.specialization}</td>
                      <td>{request.qualification}</td>
                      <td>{request.rate}</td>
                      <td className="d-flex">
                        <button
                          className="btn btn-success"
                          onClick={() => handleAccept(request)}
                        >
                          Accept
                        </button>
                        <button className="btn btn-danger">Reject</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Container>
      </div>
      <ToastContainer autoClose={2000} theme="colored" />
    </>
  );
};

export default ProviderVerification;

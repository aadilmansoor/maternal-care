import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import "./Bookings.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Bookings() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem("maternity-token") &&
      localStorage.getItem("maternity-role") !== "admin"
    ) {
      toast.warning("Please Login");
      navigate("/");
      return;
    }
    setIsLoading(false);
  }, [navigate]);
  if (isLoading) {
    return (
      <div className="spin d-flex align-items-center justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
      <h3>Bookings</h3>
      <Container>
        <Table responsive>
          <thead className="p-2">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Maternity Care Provider</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="p-2">
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <div className="d-flex">
                <td>
                  <button className="btn btn-success">Accept</button>
                </td>
                <td>
                  <button className="btn btn-danger">Reject</button>
                </td>
              </div>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Bookings;

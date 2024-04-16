import "./ProviderLeaveRequest.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { leaveRequest } from "../../../Services/allAPI";
import { formatDate } from "../../../utils";

const ProviderLeaveRequest = () => {
  const [date, setDate] = useState('')
  const [reason,setReason] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();

    if (!date || !reason ) {
      toast.warning("Please fill in all details.");
      return;

    }
    const uploadData = async () => {
      const token = localStorage.getItem("maternity-token");
      const headers = {
        "Content-type": "application/json",
        Authorization: `${token}`,
      };
      const formattedDate = formatDate(date);

      const result = await leaveRequest(
        {
          date: formattedDate,
          reason
        },
        headers
      );
      console.log(result);
      if(result.status===200){
        toast.success('Application Sent. Wait for confirmation')
      }
      else if(result.response.status===400){
        toast.warning('Leave Request Already Submitted')

      }
      
    }
    uploadData();
  }

  
  return (
    <div>
      <h2 className="my-5 text-center">Leave Request</h2>
      <div className="wid">
        <div className="input-group mb-3">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <FloatingLabel controlId="floatingTextarea2" label="Reason">
          <Form.Control
            as="textarea"
            value={reason}
            onChange={(e) =>
              setReason(e.target.value)
            }
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <div className="mt-3 d-flex gap-2 justify-content-end">
          <Button variant="danger" size="sm">
            Cancel
          </Button>{" "}
          <Button onClick={(e)=>handleSubmit(e)} variant="primary" size="sm">
            Submit
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProviderLeaveRequest;

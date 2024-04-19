import { Rating } from "@mui/material";
import React, { useState } from "react";
import "./Review.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { addReviewAPI } from "../../Services/allAPI";

const Review = ({ getReview }) => {
  const [value, setValue] = useState(0);
  const [comment, setComment] = useState("");
  const location = useLocation();
  const serviceProvider = location.state;
  const handleSubmit = async () => {
    if (value === 0 || !comment) {
      toast.warning("Please fill in all fields");
      return;
    }
    const token = localStorage.getItem("maternity-token");
    const headers = {
      "Content-type": "application/json",
      Authorization: `${token}`,
    };
    const body = {
      serviceProviderId: serviceProvider._id,
      ratings: value,
      comments: comment,
    };
    const result = await addReviewAPI(body, headers);
    if (result.status === 200) {
      setValue(0);
      setComment("");
      toast.success("Review submitted");
      getReview();
    }
  };
  return (
    <div>
      <h4 className="headings poppins-semibold text-center my-5">
        {" "}
        Submit Your Rating & Reviews
      </h4>
      <div className="wid">
        <div className="rating">
          <Rating
            size="large"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>

        <FloatingLabel
          controlId="floatingTextarea2"
          label="Type here"
          className="mt-2"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </FloatingLabel>
        <div className="mt-3 d-flex gap-2 justify-content-end">
          <Button variant="danger" size="sm">
            Cancel
          </Button>
          <Button
            onClick={() => handleSubmit(serviceProvider._id)}
            variant="primary"
            size="sm"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Review;

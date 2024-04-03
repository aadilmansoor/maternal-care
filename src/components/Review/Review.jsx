import { Rating } from "@mui/material";
import React, { useState } from "react";
import "./Review.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const Review = () => {
  const [value, setValue] = useState(0);
  const handleSubmit = () => {
    toast.success("Submitted");
  };
  return (
    <div>
      <h4 className="headings poppins-semibold text-center my-5"> Submit Your Rating & Reviews</h4>

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

        <div class="input-group mb-3"></div>

        <FloatingLabel controlId="floatingTextarea2" label="Type here">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <div className="mt-3 d-flex gap-2 justify-content-end">
          <Button variant="danger" size="sm">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="primary" size="sm">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Review;

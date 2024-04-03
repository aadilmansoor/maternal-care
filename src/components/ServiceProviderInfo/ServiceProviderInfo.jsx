import React from "react";
import "./ServiceProviderInfo.css";
import { Form } from "react-bootstrap";
import img3 from "../../Images/profilephoto.jpg";

const ServiceProviderInfo = () => {
  return (
    <div className="align">
      <img class="rounded-circle mt-5" width="170px" alt="noimagefound" src={img3}></img>

      <div className="form-cntrl">
          <Form.Label htmlFor="username"className="mt-3">Username:</Form.Label>
        <Form.Control
          type="text"
          id="username"
          aria-label="Disabled input example"
          readOnly
        />
        <Form.Label htmlFor="Email"className="mt-3"> Email:</Form.Label>
        <Form.Control
          type="text"
          id="Email"
          aria-label="Disabled input example"
          readOnly
        />
        <Form.Label htmlFor="Phonenumber"className="mt-3">Phone Number:</Form.Label>
        <Form.Control
          id="Phonenumber"
          type="text"
          aria-label="Disabled input example"
          readOnly
        />
        <Form.Label htmlFor="Service"className="mt-3">Service:</Form.Label>

        <Form.Control
          type="text"
          id="Service"
          aria-label="Disabled input example"
          readOnly
        />
        <Form.Label htmlFor="uSpecialization"className="mt-3">Specialization:</Form.Label>
        <Form.Control
          type="text"
          id="Specialization"
          aria-label="Disabled input example"
          readOnly
        />
        <Form.Label htmlFor="Qualification"className="mt-3">Qualification:</Form.Label>
        <Form.Control
          type="text"
          id="Qualification"
          aria-label="Disabled input example"
          readOnly
        />
        <Form.Label htmlFor="Rate"className="mt-3">Rate:</Form.Label>
        <Form.Control
          type="text"
          id="Rate"
          aria-label="Disabled input example"
          readOnly
        />
      </div>
    </div>
  );
};

export default ServiceProviderInfo;

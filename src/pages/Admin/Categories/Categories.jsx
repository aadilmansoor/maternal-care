import { Button, Form, InputGroup, ListGroup, Modal } from "react-bootstrap";
import "./Categories.css";
import { useState } from "react";

const Categories = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h2 className="text-center mt-5 mb-4">Categories</h2>
      <div className="d-flex flex-column align-items-center mt-2 mb-5 list-container">
        <Button className="mb-3 add-category-button" onClick={handleShow}>
          Add New Category <i className="fa-solid fa-plus"></i>
        </Button>

        <ListGroup className="categories-list">
          <ListGroup.Item>
            <div className="d-flex justify-content-between align-items-center mx-1">
              <p className="m-0">Neuro</p>
              <i className="fa-solid fa-trash text-danger"></i>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between align-items-center mx-1">
              <p className="m-0">Physio</p>
              <i className="fa-solid fa-trash text-danger"></i>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between align-items-center mx-1">
              <p className="m-0">Neuro</p>
              <i className="fa-solid fa-trash text-danger"></i>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <Form.Control
              placeholder="eg: Yoga Therapy"
              aria-label="Category"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Categories;

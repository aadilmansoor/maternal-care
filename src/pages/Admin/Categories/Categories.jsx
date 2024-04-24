import { Button, FloatingLabel, Form, ListGroup, Modal } from "react-bootstrap";
import "./Categories.css";
import { useEffect, useState } from "react";
import { getAllCategoriesAPI } from "../../../Services/allAPI";

const Categories = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");
  const [categories, setCategories] = useState([]);
  console.log(
    categories.filter((category) => category._id === selected)[0].subCategory
  );

  useEffect(() => {
    const getCategories = async () => {
      try {
        const result = await getAllCategoriesAPI();
        if (result.status === 200) {
          setCategories(result.data.newUser);
          setSelected(result.data.newUser[0]?._id);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <>
      <h2 className="text-center mt-5 mb-4">Categories</h2>
      <div className="d-flex flex-column align-items-center mt-2 mb-5 list-container">
        <Button className="mb-3 add-category-button" onClick={handleShow}>
          Add New Category <i className="fa-solid fa-plus"></i>
        </Button>

        <ListGroup className="categories-list">
          {categories.map((category) => {
            return (
              <>
                <ListGroup.Item
                  className={`${
                    selected === category._id ? "bg-dark text-white" : ""
                  }`}
                  onClick={() => handleClick(category._id)}
                  key={category._id}
                >
                  <div className="d-flex justify-content-between align-items-center mx-1">
                    <p className="m-0 text-capitalize">
                      {category.mainCategory}
                    </p>
                    <i
                      className="fa-solid fa-trash text-danger"
                      onClick={() => handleClick(category._id)}
                    ></i>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-flex justify-content-between align-items-center mx-1">
                    <p className="m-0 text-capitalize">
                      {category.mainCategory}
                    </p>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </div>
                </ListGroup.Item>
              </>
            );
          })}
        </ListGroup>
      </div>
      <h4 className="text-center mt-5 mb-4">Subcategories</h4>
      <div className="d-flex flex-column align-items-center mt-2 mb-5 list-container">
        <Button className="mb-3 add-category-button" onClick={handleShow}>
          Add New Subcategory <i className="fa-solid fa-plus"></i>
        </Button>

        <ListGroup className="categories-list">
          {categories
            .filter((category) => category._id === selected)[0]
            ?.subCategory?.map((category) => {
              return (
                <>
                  <ListGroup.Item
                    onClick={() => handleClick(category._id)}
                    key={category._id}
                  >
                    <div className="d-flex justify-content-between align-items-center mx-1">
                      <p className="m-0 text-capitalize">
                        {category.subcategory}
                      </p>
                      <i
                        className="fa-solid fa-trash text-danger"
                        onClick={() => handleClick(category._id)}
                      ></i>
                    </div>
                  </ListGroup.Item>
                </>
              );
            })}
        </ListGroup>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Subcategory"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
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

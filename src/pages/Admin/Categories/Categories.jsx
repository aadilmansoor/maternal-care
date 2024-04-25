import { Button, FloatingLabel, Form, ListGroup, Modal } from "react-bootstrap";
import "./Categories.css";
import { useEffect, useState } from "react";
import {
  addCategoryAPI,
  addSubCategoryAPI,
  deleteCategoryAPI,
  getAllCategoriesAPI,
} from "../../../Services/allAPI";
import { toast } from "react-toastify";

const Categories = () => {
  const [newCategory, setNewCategory] = useState({
    category: "",
    subcategory: "",
  });
  const [show, setShow] = useState(false);
  const [showSubcategory, setShowSubcategory] = useState(false);
  const [showDelete, setShowDelete] = useState(false)

  const [selected, setSelected] = useState("");
  const [categories, setCategories] = useState([]);
  console.log({ categories });

  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  // console.log(
  //   categories.filter((category) => category._id === selected)[0].subCategory
  // );
  console.log(newCategory);
  const getCategories = async () => {
    try {
      const result = await getAllCategoriesAPI();
      if (result.status === 200) {
        setCategories(result.data.newUser);
        console.log(result.data.newUser);
        setSelected((selected) => {
          if (!selected) {
            return result.data.newUser[0]?._id;
          }
          return selected;
        });
        setSelectedCategory(result.data.newUser[0]?.mainCategory);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSubcategory = () => setShowSubcategory(false);
  const handleShowSubcategory = () => setShowSubcategory(true);
  const handleCloseDeleteBox = () => setShowDelete(false);
  const handleShowDeleteBox = () => setShowDelete(true);

  
  const handleAddCategory = async () => {
    if (!newCategory.category || !newCategory.subcategory) {
      toast.warning("Please fill in all fields");
      return;
    }
    try {
      const result = await addCategoryAPI({
        mainCategory: newCategory.category,
      });
      if (result.status === 200) {
        const response = await addSubCategoryAPI({
          mainCategory: newCategory.category,
          sub_category: newCategory.subcategory,
        });
        if (response.status === 200) {
          console.log({ response });
          setNewCategory({
            category: "",
            subcategory: "",
          });
          setShow(false);
          getCategories();
          toast.success("Category added successfully");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddSubcategory = async () => {
    try {
      const result = await addSubCategoryAPI({
        mainCategory: selectedCategory,
        sub_category: subcategory,
      });
      if (result.status === 200) {
        setShowSubcategory(false);
        getCategories();
        toast.success("Subcategory added");
        setSubcategory("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id, category) => {
    setSelected(id);
    setSelectedCategory((currentCategory) => {
      if (currentCategory === category) {
        return;
      } else {
        setSubcategory("");
        return category;
      }
    });
  };

  const handleDeleteCategory=async()=>{
    const result=await deleteCategoryAPI({
      mainCategory_id:selected
    })
   if(result.status===200){
    toast.success("Category Deleted")
    setSelected("")
    setShowDelete(false)
    getCategories()
   }

   
  }

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
              <div key={category._id}>
                <ListGroup.Item
                  className={`${
                    selected === category._id ? "bg-dark text-white" : ""
                  }`}
                  onClick={() =>
                    handleClick(category._id, category.mainCategory)
                  }
                  key={category._id}
                >
                  <div className="d-flex justify-content-between align-items-center mx-1">
                    <p className="m-0 text-capitalize">
                      {category.mainCategory}
                    </p>
                    <i
                      className="fa-solid fa-trash text-danger"
                      onClick={handleShowDeleteBox}
                    ></i>
                  </div>
                </ListGroup.Item>
              </div>
            );
          })}
        </ListGroup>
      </div>
      <h4 className="text-center mt-5 mb-4">Subcategories</h4>
      <div className="d-flex flex-column align-items-center mt-2 mb-5 list-container">
        <Button
          className="mb-3 add-category-button"
          onClick={handleShowSubcategory}
        >
          Add New Subcategory <i className="fa-solid fa-plus"></i>
        </Button>

        <ListGroup className="categories-list">
          {categories
            .filter((category) => category._id === selected)[0]
            ?.subCategory?.map((category) => {
              return (
                <div key={category.subcategory}>
                  <ListGroup.Item onClick={() => handleClick(category._id)}>
                    <div className="d-flex justify-content-between align-items-center mx-1">
                      <p className="m-0 text-capitalize">
                        {category.subcategory}
                      </p>
                      {/* <i
                        className="fa-solid fa-trash text-danger"
                        onClick={() => handleClick(category._id)}
                      ></i> */}
                    </div>
                  </ListGroup.Item>
                </div>
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
            <Form.Control
              type="text"
              value={newCategory.category}
              onChange={(e) =>
                setNewCategory({ ...newCategory, category: e.target.value })
              }
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Subcategory"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={newCategory.subcategory}
              onChange={(e) =>
                setNewCategory({ ...newCategory, subcategory: e.target.value })
              }
              placeholder="name@example.com"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showSubcategory} onHide={handleCloseSubcategory}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              readOnly
              value={selectedCategory}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Subcategory"
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              placeholder="name@example.com"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseSubcategory}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddSubcategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDelete} onHide={handleCloseDeleteBox}>
        <Modal.Header closeButton>
          <Modal.Title><i className="fa-solid fa-triangle-exclamation me-1 text-danger"></i>Delete Category?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this category?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" size="sm" onClick={handleCloseDeleteBox}>
            Cancel
          </Button>
          <Button variant="danger" size="sm" onClick={handleDeleteCategory}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Categories;

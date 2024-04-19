import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { viewAllBlogByUser } from "../../../Services/allAPI";

const UserBlog = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    const getWebinars = async () => {
      const result = await viewAllBlogByUser();
      if (result.status === 200) {
        console.log(result);
        setAllBlogs(result.data.blog);
      }
    };
    getWebinars();
  }, []);

  return (
    <div>
      <h2 className="my-4 text-center">Blog</h2>
      <Row className="m-0">
        {allBlogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          allBlogs.map((blog) => {
            return (
              <Col
                sm={12}
                md={6}
                lg={4}
                className="d-flex justify-content-center mb-4"
              >
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src={blog.image}
                    height={318}
                    width={318}
                    className="img_holder"
                  />
                  <Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <strong>{blog.title}</strong>
                      </ListGroup.Item>
                      <ListGroup.Item>{blog.date} </ListGroup.Item>
                      <ListGroup.Item>{blog.description}</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </Row>
    </div>
  );
};
export default UserBlog;

import "./ShowReview.css";
import { Rating } from "@mui/material";

const ShowReview = () => {
  return (
    <div className="reviewcontainer">
      <h4 className="headings poppins-semibold d-flex justify-content-center mt-5 mb-4">Reviews</h4>

      <ul className="reviewlist">
        <li>
          <div>
            <p className="poppins-semibold mb-0">Name</p>
            <div className="rating">
              <Rating
                size="small"
                name="simple-controlled"
                value={2}
                readOnly
              />
            </div>

            <p className="mt-2 poppins-regular">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero est
              aut incidunt voluptatibus? Accusantium animi necessitatibus
              nesciunt optio suscipit inventore sed, ipsa, facere ex alias quos,
              odio sint laudantium quia.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <div>
            <p className="poppins-semibold mb-0">Name</p>
            <div className="rating">
              <Rating
                size="small"
                name="simple-controlled"
                value={3}
                readOnly
              />
            </div>

            <p className=" poppins-regular mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero est
              aut incidunt voluptatibus? Accusantium animi necessitatibus
              nesciunt optio suscipit inventore sed, ipsa, facere ex alias quos,
              odio sint laudantium quia.
            </p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default ShowReview;

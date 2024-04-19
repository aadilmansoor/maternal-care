import "./ShowReview.css";
import { Rating } from "@mui/material";

const ShowReview = ({ reviews }) => {
  return (
    <div className="reviewcontainer">
      <h4 className="headings poppins-semibold d-flex justify-content-center mt-5 mb-4">
        Reviews
      </h4>

      <ul className="reviewlist">
        {reviews.map((review) => {
          return (
            <>
              <li>
                <div>
                  <p className="poppins-semibold mb-2 text-capitalize mt-2">
                    {review.username}
                  </p>
                  <p className="poppins-regular">{review.date}</p>
                  <div className="rating">
                    <Rating
                      size="small"
                      name="simple-controlled"
                      value={review.ratings}
                      readOnly
                      className="mb-1"
                    />
                  </div>

                  <p className="mt-2 mb-2 poppins-regular">{review.comments}</p>
                </div>
                <hr />
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowReview;

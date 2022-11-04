import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FaStar} from 'react-icons/fa'

import { useHistory, useParams } from "react-router-dom";

import { thunkCreateReview } from "../../store/review";


import "./ReviewCreate.css";

function ReviewCreate({ setShowModal, review }) {
  const dispatch = useDispatch();
  const {id} = useParams()
  const history = useHistory()

  const user = useSelector(state => state.session.user)
  // console.log(user)




  const [stars, setStars] = useState('');
  const [createdReview, setCreatedReview] = useState('');
  // const [createdReviewImg, setcreatedReviewImg] = useState(review.reviewImg)
  const [submit, setSubmit] = useState(false);
  const [validations, setValidations] = useState(false);

// const starsClick = (rate) => {
//   setCreatedStar(rate / 20);
// };

// console.log(createdStar, "this star")


  useEffect(() => {
    const errors = [];
    if (stars <= 0 || stars > 5)
      errors.push("Stars must be greater than 0 and less than 5");
    if (createdReview.length < 20 || createdReview.length >1000 )
      errors.push("Please add a review between 20 and 1000 characters.");

    setValidations(errors);
  }, [stars, createdReview]);

  const onClick = (event) => {
    setShowModal(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmit(!submit);
    // console.log('id=====', id)
    const payload = {
      bookstoreId: id,
      stars: stars,
      review: createdReview,

    };

    let created = await dispatch(thunkCreateReview(payload))



    if (created) {
        history.push(`/bookstores/${payload.bookstoreId}`)
        setShowModal(false)
    }
  };

  return (
    <div className="create_review_main">
      <div className="create_review_div">
        <form className="create_review_form" onSubmit={onSubmit}>
          <div className="create_review_header">My review</div>



          <input
              type="number"
              name="stars"
              value={stars}
              onChange={(e) => setStars(e.target.value)}
              placeholder='0'
              min='1'
              max='5'
              className='review_star_num'
            />
            <span>{" "}</span>
            {/* <lable>
            <i className="fas fa-solid fa-star"></i>
            </lable> */}












          <div>


            <textarea
              type="text-area"
              name="review"
              value={createdReview}
              className="create_review_input_inner_reviews"
              onChange={(event) => setCreatedReview(event.target.value)}
            ></textarea>
          </div>



          <div className="create_review_profile_div">
            <i className="fa-regular fa-face-grin-wide fa-2xl"></i>
            <div className="create_review_reviewby_text">
              <div>Reviewed by</div>
              <div>{user?.firstName}</div>
            </div>
          </div>
          {validations.length > 0 && submit ? (
            <div className="create_review_empty">
              <div className="create_review_error">
                {validations.map((error, i) => (
                  <div key={i}>{error}</div>
                ))}
              </div>
            </div>
          ) : (
            <div className="create_review_empty"></div>
          )}
          <div className="create_review_buttons">
            <div>
              <button onClick={onClick} className="create_review_cancel">
                Cancel
              </button>
            </div>
            <div>
              <button
                disabled={validations.length > 0 && submit}
                type="submit"
                className="create_review_post"
              >
                Create Your Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewCreate;

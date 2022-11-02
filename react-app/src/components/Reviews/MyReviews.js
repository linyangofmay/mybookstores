import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import { thunkGetCurrentReview, thunkDeleteReview, getAllReview, thunkGetAllReview} from "../../store/review"


import { FaStar } from "react-icons/fa"

import './MyReviews.css'

import ReviewUpdateModal from "./ReviewUpdateModal"

function MyReviews() {
  const dispatch = useDispatch()
  const history = useHistory()

  const user = useSelector(state => state.session.user)

  if(!user) history.push('/')

  useEffect(() => {
      dispatch(thunkGetCurrentReview())

  },[dispatch])

  const myReviews = useSelector(state => state.review)

  const myReviewsArr = Object.values(myReviews)


  console.log('myReviewsArr----', myReviewsArr);
  console.log('myreviews------', myReviews);
  const bookstore = useSelector((state) => state.bookstore)
  const allbookstores = Object.values(bookstore)


  return (
    <div className="my_review_listing_div">
      <div className="my_review_listing_box">
        { myReviewsArr.length === 0 ? (<h1>Sorry, you have not made any reviews so far</h1>) :(
          <div>
            <h2>My Reviews</h2>
        {myReviewsArr.map((review, i) => (
          <div key={i}>
            <div className="my_review_listing_innerbox">
              <div className="my_review_listing_nav">
                <div className="my_review_left">
                  <NavLink to={`/bookstores/${review.bookstoreId}`}>
                    <img
                      // src={allbookstores[review.bookstoreId - 1]?.images[0]?.url}
                      src={review.bookstoreImg[0]?.url}
                      alt="review"
                      className="my_review_listing_img"
                    ></img>
                  </NavLink>
                   <div className="my_review_delete_div">
                   <button onClick={() => dispatch(thunkDeleteReview(review.id))}> <i className="fa-solid fa-trash"></i> </button>
                  </div>
                </div>
                <div className="my_review_main_text">
                  <div className="my_review_listing_name">
                    {review.bookstorename}
                  </div>
                  <div className="my_review_category_text">{`Category: ${allbookstores[review.bookstoreId - 1]?.category}`}</div>
                  <div className="my_review_starbox">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className="my_review_star_text">{`Your Review`}</div>
                      {review.stars === 1 && (
                        <div>
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {review.stars === 2 && (
                        <div>
                          <FaStar size={20} color="yellow" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {review.stars === 3 && (
                        <div>
                          <FaStar size={20} color="gold" />
                          <FaStar size={20} color="gold" />
                          <FaStar size={20} color="gold" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {review.stars === 4 && (
                        <div>
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {review.stars === 5 && (
                        <div>
                          <FaStar size={20} color="red" />
                          <FaStar size={20} color="red" />
                          <FaStar size={20} color="red" />
                          <FaStar size={20} color="red" />
                          <FaStar size={20} color="red" />
                        </div>
                      )}
                    </div>
                    <div className="my_review_review_text">
                      {review.review}
                    </div>
                    <div style={{ "margin-top": "10px" }}>
                      <ReviewUpdateModal review={review} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}  </div>)}
      </div>
    </div>
  );
}






export default MyReviews

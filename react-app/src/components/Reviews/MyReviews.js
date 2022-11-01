import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"
import { thunkGetCurrentReview } from "../../store/review"
import { FaStar } from "react-icons/fa"

import './MyReviews.css'

import ReviewUpdateModal from "./ReviewUpdateModal"
import { thunkGetAllBookstore } from "../../store/bookstore"

function MyReviews() {
  const dispatch = useDispatch()
  const history = useHistory()

  const currentUser = useSelector(state => state.session.user)

  if (!currentUser) {
      history.push('/')
  }

  useEffect(() => {
      dispatch(thunkGetCurrentReview())
      dispatch(thunkGetAllBookstore())
  },[dispatch])

  const myReviews = useSelector(state => state.review)
  const myReviewsArr = Object.values(myReviews)

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
                      src={allbookstores[review.bookstoreId - 1]?.images[0]?.url}
                      alt="review"
                      className="my_review_listing_img"
                    ></img>
                  </NavLink>
                  {/* <div className="my_review_delete_div">
                    <ReviewDelete review={review} />
                  </div> */}
                </div>
                <div className="my_review_main_text">
                  <div className="my_review_listing_name">
                    {review.bookstorename}
                  </div>
                  <div className="my_review_category_text">{`Category: ${allbookstores[review.bookstoreId - 1]?.category}`}</div>
                  <div className="my_review_starbox">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className="my_review_star_text">{`Your Review`}</div>
                      {Math.round(allbookstores[review.bookstoreId - 1]?.avgstars) === 1 && (
                        <div>
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {Math.round(allbookstores[review.bookstoreId - 1]?.avgstars) === 2 && (
                        <div>
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {Math.round(allbookstores[review.bookstoreId - 1]?.avgstars) === 3 && (
                        <div>
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="lightgrey" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {Math.round(allbookstores[review.bookstoreId - 1]?.avgstars) === 4 && (
                        <div>
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="orange" />
                          <FaStar size={20} color="lightgrey" />
                        </div>
                      )}
                      {Math.round(allbookstores[review.bookstoreId - 1]?.avgstars) === 5 && (
                        <div>
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
                          <FaStar size={20} color="black" />
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

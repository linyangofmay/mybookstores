import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { thunkUpdateReview } from '../../store/review'


 //git cant recognize folder name 

import './ReviewUpdate.css'


function ReviewUpdate({review, setShowModal}) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [updatedStar, setUpdatedStar] = useState(review.stars)
    const [updatedReview, setUpdatedReview] = useState(review.review)
    // const [updatedReviewImg, setUpdatedReviewImg] = useState(review.reviewImg)
    const [submit, setSubmit] = useState(false)
    const [validations, setValidations] = useState(false)

    // const starsClick = (rate) => {
    //   setUpdatedStar(rate / 20)
    // }

    // console.log(setUpdatedStar, )

    useEffect(() => {
        const errors = []
        if (updatedStar <= 0 || updatedStar > 5) errors.push('Stars must be greater than 0 and less than 5')
        if (updatedReview?.length < 20) errors.push('Please add a review more than 20 characters long')

          setValidations(errors)
    }, [updatedStar, updatedReview])

    const onClick = (event) => {
        setShowModal(false)
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        setSubmit(!submit)
        const payload = {
            id: review.id,
            bookstoreId: review.bookstoreId,
            stars: updatedStar,
            review: updatedReview,
            // updatedReviewImg
        };

        let updatedRevew = await dispatch(thunkUpdateReview(payload))

        if (updatedRevew) {

            setShowModal(false)
            history.push('/myreviews')
        }
    }

    return (
      <div className="update_review_main">
        <div className="update_review_div">
          <form className="update_review_form" onSubmit={onSubmit}>
            <div className="update_review_header">My review</div>
            <input
              type="number"
              name="stars"
              value={updatedStar}
              onChange={(e) => setUpdatedStar(e.target.value)}
              placeholder='0'
              min='1'
              max='5'
              className='review_star_num'
            />
            <span>{" "}</span>

            <div>

              <textarea
                type="text-area"
                name="review"
                value={updatedReview}
                className="update_review_input_inner_reviews"
                onChange={(event) => setUpdatedReview(event.target.value)}
              ></textarea>
            </div>

            <div className="update_review_profile_div">
              <i className="fa-regular fa-face-grin-wide fa-2xl"></i>
              <div className="update_review_reviewby_text">
                <div>Reviewed by</div>
                <div>{review.firstName}</div>
              </div>
            </div>
            {validations.length > 0 && submit ? (
              <div className="update_review_empty">
                <div className="update_review_error">
                  {validations.map((error, i) => (
                    <div key={i}>{error}</div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="update_review_empty"></div>
            )}
            <div className="update_review_buttons">
              <div>
                <button onClick={onClick} className="update_review_cancel">
                  Cancel
                </button>
              </div>
              <div>
                <button type="submit" className="update_review_post">
                  Post Your Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}


export default ReviewUpdate

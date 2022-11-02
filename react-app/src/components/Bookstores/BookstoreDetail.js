import React from "react";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetOneBookstore } from "../../store/bookstore";
import './BookstoreDetail.css'
import { thunkGetOneBookstoreReview } from "../../store/review";
import ReviewCreateModal from "../Reviews/ReviewCreateModal";
import { FaStar } from 'react-icons/fa'
import { thunkGetAllBookstore } from "../../store/bookstore";
import { Modal } from '../../context/Modal';


function BookstoreDetail() {
     const { id } = useParams();
     const [isLoaded, setIsLoaded] = useState(false);
     //console.log('id=======', id);
     const dispatch = useDispatch();
     const history = useHistory();
     //   const bookstore = useSelector((state)=> state.bookstore[id]);
     const bookstore = useSelector((state) => {
          console.log('state----', state)
          return state.bookstore[id]
     });

     console.log('bookstore-----', bookstore)
     const user = useSelector((state) => state.session.user);
     const review = useSelector((state) => state.review);
     const reviewArr = Object.values(review);




     const today = new Date();

     console.log('reviewArr-----', reviewArr);
     const reviewCount = reviewArr?.length;
     console.log('reviewArrlength-----', reviewArr?.length);
     const imageArr = bookstore?.images

     const filteredreview = reviewArr?.filter(
          (item) => item?.userId === user?.id
     )
     console.log('filteredreview----', filteredreview);



     // useEffect(() => {
     //      dispatch(thunkGetOneBookstore(id));
     //      dispatch(thunkGetOneBookstoreReview(id));

     //      dispatch(thunkGetAllBookstore());

     // }, [dispatch, id]);
     useEffect((e) => {
          (async () => {
               await dispatch(thunkGetOneBookstore(id));
               await dispatch(thunkGetOneBookstoreReview(id));
               await setIsLoaded(true)
               await dispatch(thunkGetAllBookstore());
          })();
     }, [dispatch, id])
     if (!isLoaded) return null


     return isLoaded && (

          <div className='bs_detail_container_outermost'>
               <div className='bs_top_container'>
                    {/* {imageArr && imageArr.map((image, idx) => (
                         <div key={idx}>

                              <img alt='bookstore'
                                   src={image?.url}
                                   style={{ width: 480, height: 360 }}
                              ></img>
                         </div>
                    ))} */}
                    <div className='bs_banner_container'>
                         <div className='bs_banner_img_container'>
                              <img
                                   className='bs_banner_img'
                                   src={bookstore?.previewImage}
                                   alt='Bookstore Image'
                              />

                         </div>

                    </div>
               </div>


               <br></br>
               <br></br>


               {!user ||
                    bookstore?.ownerId === user?.id ||
                    filteredreview.length ? (
                    <div></div>
               ) : (
                    <div>
                         <ReviewCreateModal review={review} />
                    </div>
               )}

               <div>
                    {reviewCount ? (reviewArr?.map((review, idx) => (
                         <div className='bottom_review_container_outer' key={idx}>
                              <div className='bottom_review_container'>
                                   <div className='review_starts_container'>
                                        {review.stars === 1 && (
                                             <div>
                                                  <FaStar size={20} color="yellow" />
                                                  <FaStar size={20} color="lightgrey" />
                                                  <FaStar size={20} color="lightgrey" />
                                                  <FaStar size={20} color="lightgrey" />
                                                  <FaStar size={20} color="lightgrey" />
                                             </div>
                                        )}
                                        {review.stars === 2 && (
                                             <div>
                                                  <FaStar size={20} color="gold" />
                                                  <FaStar size={20} color="gold" />
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

                                   <div>
                                        <div className='review_container_text'>
                                             {review?.review}

                                        </div>
                                        <br></br>
                                   </div>

                                   <div className='review_user_profile'>
                                   <i className="fa-regular fa-circle-user fa-2xl">&nbsp;</i>
                                   <div>

                                   </div>
                                   {review.firstName}&nbsp;{review.lastName.slice(0,1)}.&nbsp;
                                   <div>{review.createdAt.slice(0,10)} </div>
                                   </div>



                              </div>



                         </div>

                    ))) : (
                         <div> Would you like to leave a review? </div>
                    )}
               </div>


          </div>


     )





}

export default BookstoreDetail

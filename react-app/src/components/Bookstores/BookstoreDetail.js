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

                    <div className='bs_banner_container'>
                         <div className='bs_banner_img_container'>
                              <img
                                   className='bs_banner_img'
                                   src={bookstore?.previewImage}
                                   alt='Bookstore Image'
                              />
                         </div>

                    </div>

                    <div className='bs_banner_text_1'>
                         <div className='bs_banner_text_2'>
                              <div className='bs-top-info'>{bookstore?.name}</div>
                              <div className='banner-review'>{reviewCount} Reviews</div>
                              <div className='review_starts_container'>
                                   {Math.round(bookstore?.avgstars) === 1 && (
                                        <div>
                                             <FaStar size={30} color="yellow" />
                                             <FaStar size={30} color="lightgrey" />
                                             <FaStar size={30} color="lightgrey" />
                                             <FaStar size={30} color="lightgrey" />
                                             <FaStar size={30} color="lightgrey" />
                                        </div>
                                   )}
                                   {Math.round(bookstore?.avgstars) === 2 && (
                                        <div>
                                             <FaStar size={30} color="gold" />
                                             <FaStar size={30} color="gold" />
                                             <FaStar size={30} color="lightgrey" />
                                             <FaStar size={30} color="lightgrey" />
                                             <FaStar size={30} color="lightgrey" />
                                        </div>
                                   )}
                                   {Math.round(bookstore?.avgstars) === 3 && (
                                        <div>
                                             <FaStar size={30} color="gold" />
                                             <FaStar size={30} color="gold" />
                                             <FaStar size={30} color="gold" />
                                             <FaStar size={30} color="lightgrey" />
                                             <FaStar size={30} color="lightgrey" />
                                        </div>
                                   )}
                                   {Math.round(bookstore?.avgstars) === 4 && (
                                        <div>
                                             <FaStar size={30} color="orange" />
                                             <FaStar size={30} color="orange" />
                                             <FaStar size={30} color="orange" />
                                             <FaStar size={30} color="orange" />
                                             <FaStar size={30} color="lightgrey" />
                                        </div>
                                   )}
                                   {Math.round(bookstore?.avgstars) === 5 && (
                                        <div>
                                             <FaStar size={30} color="red" />
                                             <FaStar size={30} color="red" />
                                             <FaStar size={30} color="red" />
                                             <FaStar size={30} color="red" />
                                             <FaStar size={30} color="red" />

                                        </div>
                                   )}

                              </div>
                         </div>

                    </div>



               </div>


               <br></br>

               {!user ||
                    bookstore?.ownerId === user?.id ||
                    filteredreview.length ? (
                    <div></div>
               ) : (
                    <div className='writeareview_btn'>
                         <ReviewCreateModal review={review} />
                    </div>
               )}
               <div className='bs-bottom-container'>
                    <div lassName='bs-bottom-hoursandreview-container'>
                         <div className="business-hours">

                              <div className='business-hours-header'>Business Hours</div>
                              <div className="day-hours">Monday: {bookstore.businessHours}</div>
                              <div className="day-hours">Tuesday: {bookstore.businessHours}</div>
                              <div className="day-hours">Wednesday: {bookstore.businessHours}</div>
                              <div className="day-hours">Thursday: {bookstore.businessHours}</div>
                              <div className="day-hours">Friday: {bookstore.businessHours}</div>
                              <div className="day-hours">Saturday: {bookstore.businessHours}</div>
                              <div className="day-hours">Sunday: {bookstore.businessHours}</div>


                         </div>



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
                                                  {review.firstName}&nbsp;{review.lastName.slice(0, 1)}.&nbsp;
                                                  <div>{review.createdAt.slice(0, 10)} </div>
                                             </div>

                                        </div>

                                   </div>

                              ))) : (
                                   <div> </div>
                              )}
                         </div>
                    </div>

                    <div className='bs-right-card'>
                         <div calssName='bs-right-card-container'>
                              <div className='right-name'>{bookstore.name}</div>

                              <div className='right-phone'>{bookstore.phone}
                              <i className="fa-solid fa-phone"></i>
                              </div>

                               <div className='right-address'>
                                   <div>
                                   <div className='right-address-text'> Address</div>
                                   <div className='right-address-zipcodeandaddress'>
                                   <div>{bookstore.address}</div>
                                   <div>{bookstore.zipcode}</div>
                                   </div>

                                   </div>



                                   <div className='right-address-label'>
                                   <i class="fa-solid fa-location-dot"></i>
                                   </div>


                               </div>


                              <div className='right-description'>{bookstore.description}</div>


                         </div>
                    </div>
               </div>

          </div >


     )





}

export default BookstoreDetail

import React from "react";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetOneBookstore } from "../../store/bookstore";
import './BookstoreDetail.css'
import { thunkGetOneBookstoreReview } from "../../store/review";
import ReviewCreateModal from "../Reviews/ReviewCreateModal";

import { thunkGetAllBookstore } from "../../store/bookstore";
import { Modal } from '../../context/Modal';


function BookstoreDetail() {
     const { id } = useParams();
     const [isLoaded, setIsLoaded] =useState(false);
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
     const reviewArr = bookstore?.reviews
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
     useEffect((e) =>{
          (async ()=>{
               await dispatch(thunkGetOneBookstore(id));
               await  dispatch(thunkGetOneBookstoreReview(id));
               await setIsLoaded(true)
               await dispatch(thunkGetAllBookstore());
          })();
     }, [dispatch, id])
     if (!isLoaded ) return null


     return isLoaded && (

          <div className='bs_detail_container_outermost'>
               <div className='bs_detail_container'>
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
                              className= 'bs_banner_img'
                              src={bookstore?.images[0].url}
                              alt='Bookstore Image'
                              />

                         </div>

                    </div>
               </div>





               {!user ||
                    bookstore?.userId === user?.id ||
                    filteredreview.length ? (
                    <div></div>
               ) : (
                    <div>
                         <ReviewCreateModal review={review} />
                    </div>
               )}

               <div>
                    {reviewArr && reviewArr?.map((review, idx) => (
                         <div key={idx}>

                              {review?.review}
                              {review?.firstName}
                         </div>

                    ))}
               </div>


          </div>


     )





}

export default BookstoreDetail

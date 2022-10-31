import React from "react";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { thunkGetOneBookstore } from "../../store/bookstore";
import './BookstoreDetail.css'
import { thunkGetAllBookstoreReview } from "../../store/review";
// import ReviewCreateModal from "../Reviews/ReviewCreateModal";
// import { Rating } from 'react-simple-star-rating'
// import { FaStar } from 'react-icons/fa'
import { thunkGetAllBookstore } from "../../store/bookstore";
import {Modal} from '../../context/Modal';

function BookstoreDetail(){
  const {id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const bookstore = useSelector((state)=> state.bookstore[id]);
  console.log('bookstore-----', bookstore)
  const user = useSelector((state) => state.session.user);
  const review = useSelector((state)=> state.review);
  const reviewArray = Object.values(review);
  const reviewCount = reviewArray.length;
  const imageArr = bookstore?.images
  console.log('imageArr------', imageArr)

  useEffect(() =>{
    dispatch(thunkGetOneBookstore(id));

  }, [dispatch, id]);

  return (
        <>
          <h1>Hello</h1>
        <div>
         {imageArr && imageArr.map((image, idx)=>(
              <div key ={idx}>
                   {/* <div style={{ backgroundImage:`url(${image.url})`}}> </div>  */}
                   <img alt='bookstore'
                       src={image?.url}
                       style={{width:480, height:360}}
                  ></img>
              </div>
         ))}
        </div>

        {/* <div className ='see_all_images'>
          <NavLink to={`/`}

        </div> */}
      </>
  )





}

export default BookstoreDetail

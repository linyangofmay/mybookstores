import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { thunkGetOneBookstore } from "../../store/bookstore";
import './BookstoreDetail.css'
import { thunkGetAllBookstoreReview } from "../../store/review";
import ReviewCreateModal from "../Reviews/ReviewCreateModal";
import { Rating } from 'react-simple-star-rating'
import { FaStar } from 'react-icons/fa'
import { thunkGetAllBookstore } from "../../store/bookstore";

function BookstoreDetail(){
  const {id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const bookstore = useSelector((state)=> state.bookstore[id]);
  const user = useSelector((state) => state.session.user);
  const review = useSelector((state)=> state.review);




}

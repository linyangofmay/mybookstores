import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllBookstore } from "../../store/bookstore";
import { thunkGetAllReview } from "../../store/review"


import './LoggedinBookstoreList.css'

function LoggedoutBookstoreList() {
  const bookstore = useSelector((state) => state.bookstore)
  const allbookstores = Object.values(bookstore)

  // const image = useSelector((state) => {console.log('state----', state)
  // return state.image
  // });



  // const review= useSelector((state) => {console.log('state----', state)
  // return state.review
  // });


  const review = useSelector((state) => state.review)
  const reviewArr = Object.values(review)
  console.log('reviewArr------', reviewArr);


  console.log('allbookstores---------', allbookstores);
  const dispatch = useDispatch()

  const user = useSelector((state) => state.session)

  const reviewvalue = Math.round(bookstore?.avgstars)

  const nouserreturn =

    useEffect(() => {
      dispatch(thunkGetAllBookstore())

      dispatch(thunkGetAllReview())
    }, [dispatch])



  return (

    <div className='homepage_outermost'>

      <div className="homepage-background-outercontainer">
        <div className='homepage-background-container homepage-img'></div>

      </div>

      <div className='recently_activities'>
      {allbookstores &&
              allbookstores.slice(0,15).map((bookstore) => (
                <div key={bookstore.id}>
                  <NavLink
                    to={`/bookstores/${bookstore.id}`}
                    className="product_navlink"
                  >
                    <img
                      src={bookstore?.images[0]?.url}
                      alt="bookstore"
                      className="productlist_image"
                    ></img>


                    <div className="review_inner_line_div">
                      <div>
                        <span style={{ fontSize: "25pt" }}>
                          {Math.round(bookstore?.avgstars)} reviews&nbsp;
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}

      </div>
    </div>

  )
}

export default LoggedoutBookstoreList

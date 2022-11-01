import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { thunkGetAllBookstore, thunkGetCurrentBookstore, thunkDeleteBookstore } from "../../store/bookstore";
import { NavLink } from "react-router-dom";
import BookstoreUpdate from "./BookstoreUpdate";


import './MyBookstore.css'


function MyBookstore(){
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.session.user)

  const currentBookstore = useSelector(state => state.bookstore)
  const currentBookstoreArr = Object.values(currentBookstore)

  const bookstorefilter = currentBookstoreArr.filter(bookstore =>bookstore?.ownerId === user?.id)
  console.log('bookstorefilter-----', bookstorefilter);



  useEffect(() => {
    // dispatch(thunkGetAllBookstore())
    dispatch(thunkGetCurrentBookstore())
  }, [dispatch])

  if (!user) history.push('/')

  return (
    <div className="my_product_listing_div">
      { bookstorefilter.length===0 ? (<h1>You have no bookstores to open so far</h1>): (
        <div>

        <h1>{`${user?.firstName}'s Bookstore`}</h1>

      <div className="my_product_listing_box">
        {bookstorefilter.map((bookstore, i) => (
          <div  key={i}>
            <div className="my_product_listing_innerbox">
            <div className="my_product_listing_nav">
              <NavLink to={`/bookstores/${bookstore?.id}`}>
                <img
                  alt="bookstore"
                  src={bookstore?.images?.[0].url}
                  className="my_product_listing_img"
                ></img>
              </NavLink>
            <div className="my_product_listing_name">{bookstore?.name}</div>
            </div>
            <div className = "my_product_listing_desbox">
              <div className="my_product_listing_description">{bookstore?.description}</div>
              <div className="my_product_listing_category">Category: {bookstore?.category}</div>

            </div>

            <div id= "my_product_listing_btn_container">
            <Link id="userproducteditbtn" to={`/bookstores/${bookstore?.id}/edit`}>
                <button><i className="fa-solid fa-pen-to-square"></i></button>
           </Link>

              <button onClick={() => dispatch(thunkDeleteBookstore(bookstore.id))}> <i className="fa-solid fa-trash"></i> </button>
            </div>
          </div>
          </div>
        ))}
      </div>  </div>)}
    </div>
  )







}


export default MyBookstore

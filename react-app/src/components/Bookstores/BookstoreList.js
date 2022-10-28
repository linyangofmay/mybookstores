import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllBookstore } from "../../store/bookstore";
import './BookstoreList.css'

function BookstoreList() {
  const bookstore = useSelector((state) => state.bookstore)
  const allbookstores = Object.values(bookstore)
  console.log('allbookstores---------', allbookstores);
  const dispatch = useDispatch()

  const user = useSelector((state) => state.session)

  useEffect(() => {
    dispatch(thunkGetAllBookstore())
  }, [dispatch])


  return (
      <>
      <div className='homepage-background-container homepage-img'>
      {allbookstores &&
          allbookstores.slice(0,9).map((bookstore) => (
            <div>
              {bookstore?.name}
            </div>
          ))
        }

      </div>

      <div>

     </div>
     </>
  )
}



export default BookstoreList

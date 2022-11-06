import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllBookstore } from "../../store/bookstore";
import { thunkGetAllReview } from "../../store/review"
import { FaStar } from 'react-icons/fa'

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
  // console.log('reviewArr------', reviewArr);


  // console.log('allbookstores---------', allbookstores);
  const dispatch = useDispatch()

  const user = useSelector((state) => state.session)

  // const reviewvalue = Math.round(bookstore?.avgstars)
  // console.log('reviewvalue------', reviewvalue);

  const nouserreturn =

    useEffect(() => {
      dispatch(thunkGetAllBookstore())

      dispatch(thunkGetAllReview())
    }, [dispatch])



  return (

    <div className='homepage_outermost'>

      {/* <div className="homepage-background-outercontainer">
          <div className='homepage-background-container homepage-img'></div>
        </div> */}
      <br></br>
      <br></br>
      <div className='homepage_title_container'>
        <div className='homepage_title'>Recently Added Bookstores </div>
      </div>

      <div className='recently_activities_container'>
        <div className='recently_activities_subcontainer'>
          {allbookstores &&
            allbookstores.reverse().slice(0, 9).map((bookstore) => (
              <div className='recent_activity_card' key={bookstore.id}>
                {/* <NavLink
                  to={`/bookstores/${review.bookstoreId}`}
                  className="hompage_navlink"
                > */}

                <div className='recent_activity_user_container'>

                  {/* <div className='ra_user_profile'><i className="fas fa-user-circle fa-2x" /> </div> */}

                  {/* <div className='recenty_activity_user_name_container'>
                      <div className='ra_user_name'>{bookstore?.reviews[0]?.firstName}&nbsp; {bookstore?.reviews[0]?.lastName.slice(0, 1)}. </div>
                      <div className='ra_user_name_wrote'>Wrote a review</div>
                    </div> */}


                </div>




                <img className='recent_activity_image'
                  // src={bookstore?.images[0]?.url}
                  src={bookstore?.previewImage}
                  alt="bookstore"

                />

                <div className='ra_bookstorename_container'>
                  <NavLink className='ra_bs_name' to={`/bookstores/${bookstore.id}`}>
                    {bookstore.name}
                    <div className='middle_address'>
                      <div>{bookstore.address}</div>
                      <div>{bookstore.city} {bookstore.state}</div>

                    </div>

                  </NavLink>
                </div>


                <div className='ra_reviewstars'>

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

                  {Math.round(bookstore.avgstars) === 0 && (
                    <div>
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />

                    </div>

                  )}

                </div>
                <div style={{ fontweight: "700" }} className='ra_review' >
                  {bookstore?.description.slice(0, 79) + '...'}
                </div>



                <div className='ra_bookstorename_container'>
                  <NavLink className='ra_bs_name' to={`/bookstores/${bookstore.id}`}>
                    Continue reading
                  </NavLink>
                </div>








                {/* </NavLink> */}
              </div>

            ))}
        </div>
      </div>
    </div>

  )
}

export default LoggedoutBookstoreList

import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllBookstore } from "../../store/bookstore";
import { thunkGetAllReview } from "../../store/review";
import LoggedoutBookstoreList from './LoggedoutBookstoreList';
import './LoggedinBookstoreList.css'
import { FaStar } from 'react-icons/fa'

function LoggedinBookstoreList() {
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
  const reviewCount = reviewArr?.length;
  const avgStar = reviewArr?.map((review) => review.stars);
  let sum = 0;
  avgStar.forEach((review) => {
    sum += review;
  });

  const realAvgStar = Math.round(sum / reviewCount);
  // console.log('reviewArr------', reviewArr);
  //  console.log('realAvgStar------', realAvgStar)





  // console.log('allbookstores---------', allbookstores);
  const dispatch = useDispatch()

  const user = useSelector((state) => state.session)





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
      <LoggedoutBookstoreList />
      <br></br>
      <br></br>

      <div className='homepage_title_container'>
          <br></br>
        <div className='homepage_title'>Recent Activity </div>
      </div>

      <div className='recently_activities_container'>
        <div className='recently_activities_subcontainer'>
          {reviewArr &&
            reviewArr.reverse().slice(0, 12).map((review) => (
              <div className='recent_activity_card' key={review.bookstoreId}>
                {/* <NavLink
                to={`/bookstores/${review.bookstoreId}`}
                className="hompage_navlink"
              > */}

                <div className='recent_activity_user_container'>

                  <div className='ra_user_profile'><i className="fas fa-user-circle fa-2x" /> </div>

                  <div className='recenty_activity_user_name_container'>
                    <div className='ra_user_name'>{review?.firstName}&nbsp; {review?.lastName.slice(0, 1)}. </div>
                    <div className='ra_user_name_wrote'>Wrote a review</div>
                  </div>


                </div>




                <img className='recent_activity_image'
                  src={review?.bookstoreImg}

                  alt="bookstore"

                />

                <div className='ra_bookstorename_container'>
                  <NavLink className='ra_bs_name' to={`/bookstores/${review.bookstoreId}`}>
                    {review.bookstorename}
                  </NavLink>
                </div>

                <div className='ra_reviewstars'>


                  {review?.stars === 1 && (
                    <div>
                      <FaStar size={30} color="yellow" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                    </div>
                  )}
                  {review?.stars === 2 && (
                    <div>
                      <FaStar size={30} color="gold" />
                      <FaStar size={30} color="gold" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                    </div>
                  )}
                  {review?.stars === 3 && (
                    <div>
                      <FaStar size={30} color="gold" />
                      <FaStar size={30} color="gold" />
                      <FaStar size={30} color="gold" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                    </div>
                  )}
                  {review?.stars === 4 && (
                    <div>
                      <FaStar size={30} color="orange" />
                      <FaStar size={30} color="orange" />
                      <FaStar size={30} color="orange" />
                      <FaStar size={30} color="orange" />
                      <FaStar size={30} color="lightgrey" />
                    </div>
                  )}



                  {review?.stars === 5 && (
                    <div>
                      <FaStar size={30} color="red" />
                      <FaStar size={30} color="red" />
                      <FaStar size={30} color="red" />
                      <FaStar size={30} color="red" />
                      <FaStar size={30} color="red" />

                    </div>
                  )}

                  {review?.stars === 0 && (
                    <div>
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />
                      <FaStar size={30} color="lightgrey" />

                    </div>

                  )}


                </div>
                {/* <i className="fas fa-solid fa-star fa-2xl style:{{color:red}}"></i>  */}



                <div style={{ fontweight: "700" }} className='ra_review' >
                  {review?.review.slice(0, 79) + '...'}
                </div>



                <div className='ra_bookstorename_container'>
                  <NavLink className='ra_bs_name' to={`/bookstores/${review.bookstoreId}`}>
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

export default LoggedinBookstoreList
//added some note

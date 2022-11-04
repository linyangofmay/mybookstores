import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetAllBookstore } from "../../store/bookstore";
import { thunkGetAllReview } from "../../store/review";
import LoggedoutBookstoreList from './LoggedoutBookstoreList';
import './LoggedinBookstoreList.css'

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

                <div className ='ra_bookstorename_container'>
                  <NavLink className='ra_bs_name'  to={`/bookstores/${review.bookstoreId}`}>
                   {review.bookstorename}
                  </NavLink>
                </div>

                <div className='ra_reviewstars'>
                  {realAvgStar === 5 && (
                     <div className='fivestars'>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                    </div>

                  )}

                   {realAvgStar === 4 && (
                     <div className='fourstars'>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>

                    </div>
                   )}

                    {realAvgStar === 3 && (
                     <div className='threestars'>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>

                    </div>

                  )}

                   {realAvgStar === 2 && (
                     <div className='twostars'>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>

                    </div>

                  )}

                    {realAvgStar === 1 && (
                     <div className='onestar'>
                      <i class="fas fa-solid fa-star fa-2xl "></i>

                    </div>

                  )}

                  {realAvgStar === 0 && (
                     <div className='zerostar'>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                      <i class="fas fa-solid fa-star fa-2xl "></i>
                    </div>

                  )}




                </div>
                {/* <i className="fas fa-solid fa-star fa-2xl style:{{color:red}}"></i>  */}



                <div style = {{fontweight:"700"}} className='ra_review' >
                  {review?.review.slice(0,83) + '...'}
                </div>



                <div className ='ra_bookstorename_container'>
                  <NavLink className='ra_bs_name'  to={`/bookstores/${review.bookstoreId}`}>
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

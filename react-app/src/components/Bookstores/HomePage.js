import {useDispatch, useSelector} from 'react-redux';
import LoggedoutBookstoreList from './LoggedoutBookstoreList';
import LoggedinBookstoreList from './LoggedinBookstoreList';




function HomePage(){
  const user= useSelector((state)=>state.session)
  console.log('user-----', user);

  return (
    <>
     <div className="homepage-background-outercontainer">
          <div className='homepage-background-container homepage-img'></div>
        </div>
    { user.user ? ( < LoggedinBookstoreList/>  ) :
    (<LoggedoutBookstoreList/>) }




    </>
  )
}

export default HomePage

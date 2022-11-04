import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {  thunkUpdateBookstore, thunkGetAllBookstore } from '../../store/bookstore'

import './BookstoreCreate.css'
import User from "../User";


function BookstoreUpdate() {
 const user = useSelector((state) => state.session.user);
  const bookstore = useSelector(state => state?.bookstore);
  const bookstoreArr = Object.values(bookstore)
  console.log('bookstoreArr---', bookstoreArr)
  const [isLoaded , setIsLoaded] = useState(false);
  const {id} = useParams()
   const editBookstore = bookstoreArr?.find(item => item.id == id)
   console.log('editBookstore=========', editBookstore);
  // const editBookstore = useSelector((state) =>state.bookstore[id])
  //console.log('user-----', user);
  const dispatch = useDispatch()
  const history = useHistory()
  // const [ownerId, setOwnerId] = useState('');
  const [name, setName] = useState(editBookstore?.name)
  const [description, setDescription] = useState(editBookstore?.description)
  const [website, setWebsite] = useState(editBookstore?.website)
  const [price, setPrice] = useState(editBookstore?.price)
  const [category, setCategory] = useState(editBookstore?.category)
  const [businessHours, setBusinessHours] = useState(editBookstore?.businessHours)
  const [phone, setPhone] = useState(editBookstore?.phone)
  const [address, setAddress] = useState(editBookstore?.address)
  const [city, setCity] = useState(editBookstore?.city)
  const [state, setState] = useState(editBookstore?.state)
  const [country, setCountry] = useState(editBookstore?.country)
  const [zipcode, setZipcode] = useState(editBookstore?.zipcode)
  // const [latitude, setLatitude] = useState(editBookstore.latitude)
  // const [longitude, setLongitude] = useState(editBookstore.longitude)
  const [previewImage, setPreviewImage] = useState(editBookstore?.previewImage)

  const [errors, setErrors] = useState([])
  const [submitted, setSubmitted] = useState(false);
  const priceArr = ['$', '$$', '$$$', '$$$$']
  const businessHoursArr = [['07:00 AM - ', '05:00 PM'], ['07:30 AM - ', '05:30 PM'], ['08:00 AM - ', '06:00 PM'], ['08:30 AM - ', '06:30 PM'], ['09:00 AM - ', '07:00 PM'], ['09:30 AM - ', '07:30 PM'], ['10:00 AM - ', '09:00 PM'], ['10:30 AM - ', '09:30 PM'], ['11:00 AM - ', '07:00 PM'], ['11:30 AM - ', '7:30 PM'], ['12:00 PM - ', '10:00 PM']]
  const categoryArr = ["usedBooks", "stationary", "CD & Video", "restroom", "multiple stories", "coffee", "kids", "lounge"]
  const zipregx = /^\d{5}$/
  const phoneregx = /^\d{10}$/
  const webregx = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  const imageregx = /\.(jpeg|jpg|png|svg)$/
  useEffect(() =>{
    dispatch(thunkGetAllBookstore())
  }, [dispatch]);
  useEffect(()=>{
    if(editBookstore){
      setIsLoaded(true)
    }
  }, [editBookstore])

  useEffect(() => {
    let errors = [];
    if (name?.length < 2 || name?.length > 200) {
      errors.push('name must be between 2 and 200 letters')
    }

    if (description?.length <20 || description?.length >500){
      errors.push('description must be between 20 and 500 letters')
    }
    if (address?.length < 2 || address?.length > 200) {
      errors.push('address must be between 2 and 200 letters')
    }
    if (city?.length < 1 || city?.length > 100) {
      errors.push('city must be between 2 and 100 letters')
    }
    if (state?.length < 1 || state?.length > 100) {
      errors.push('name must be between  and 100 letters')
    }
    if (country?.length < 2 || country?.length > 50) {
      errors.push('country must be between 2 and 10 letters')
    }
    if ((!zipcode?.match(zipregx))) {
      errors.push("zipcode: must be 5 numbers.")
    }
    if (website?.length < 2 || !website?.match(webregx)) {
      errors.push("business website: must be a valid url ( https://example.ex ).");
    }
    if ((phone?.length !== 10 || !phone?.match(phoneregx))) {
      errors.push("business phone: must be 10 digit numbers ( 1234567890 ).")
    }
     console.log('price========', price)
    // if((!previewImage.split('?')[0].match(imageregx) ) ){
    //   errors.push("image must be jpg, jpeg, png svg et al types")
    // }
    if (
      (!previewImage?.includes("jpg") &&
        !previewImage?.includes("png") &&
        !previewImage?.includes("jpeg") &&
        !previewImage?.includes("svg")) &&
      (!previewImage?.includes("https") && !previewImage?.includes("http"))
    )
      errors.push("Please enter a valid url image");

    setErrors(errors);
  }, [name, description, address,  city, state, country, zipcode, website, phone, price, previewImage])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (errors.length) return

    const updateBookstore = {
      ownerId : user.id,
      name,
      description,
      price,
      category,
      businessHours,
      website,
      phone,
      address,
      city,
      state,
      country,
      zipcode,
      // latitude,
      // longitude,
      previewImage

    };

    const res = await dispatch(thunkUpdateBookstore(updateBookstore, id))
    if (res) {
      console.log('res-------', res);
      history.push(`/bookstores/${res.id}`)
    }


  }
  console.log('id======', id)

  return isLoaded &&(

    <div className="create_product_main">

      <div className="create_product_div">
        <h1>Update a Bookstore</h1>
        <form className="create_product_form" onSubmit={handleSubmit}>

          <div className='login_form_error'>
            {submitted && (errors).map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>

          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Name</div>
            </div>

            <div>
              <input
                type="text"
                name="name"
                value={name}
                className="create_product_input_inner"
                onChange={(event) => setName(event.target.value)}
                required
              ></input>
            </div>
          </div>


          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Description</div>

            </div>
            <div>
              <textarea
                type="text-area"
                name="description"
                value={description}
                className="create_product_input_inner_descript"
                onChange={(event) => setDescription(event.target.value)}
                required
              ></textarea>
            </div>
          </div>

          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Address</div>
            </div>

            <div>
              <input
                type="text"
                name="address"
                value={address}
                className="create_product_input_inner"
                onChange={(event) => setAddress(event.target.value)}
                required
              ></input>
            </div>
          </div>

          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>City</div>
            </div>

            <div>
              <input
                type="text"
                name="city"
                value={city}
                className="create_product_input_inner"
                onChange={(event) => setCity(event.target.value)}
                required
              ></input>
            </div>
          </div>

          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>State</div>
            </div>

            <div>
              <input
                type="text"
                name="state"
                value={state}
                className="create_product_input_inner"
                onChange={(event) => setState(event.target.value)}
                required
              ></input>
            </div>
          </div>


          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Country</div>
            </div>

            <div>
              <input
                type="text"
                name="country"
                value={country}
                className="create_product_input_inner"
                onChange={(event) => setCountry(event.target.value)}
                required
              ></input>
            </div>
          </div>

          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Zipcode</div>
            </div>

            <div>
              <input
                type="text"
                name="zipcode"
                value={zipcode}
                className="create_product_input_inner"
                onChange={(event) => setZipcode(event.target.value)}
                required
              ></input>
            </div>
          </div>




          {/* <div className="create_product_input">
            <div className="create_product_text_box">
              <div>latitude</div>
            </div>

            <div>
              <input
                type="number"
                name="latitude"
                value={latitude}
                className="create_product_input_inner"
                onChange={(event) => setLatitude(event.target.value)}
                required
              ></input>
            </div>
          </div> */}


          {/* <div className="create_product_input">
            <div className="create_product_text_box">
              <div>longitude</div>
            </div>

            <div>
              <input
                type="number"
                name="longitude"
                value={longitude}
                className="create_product_input_inner"
                onChange={(event) => setLongitude(event.target.value)}
                required
              ></input>
            </div>
          </div> */}


          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Phone</div>
            </div>

            <div>
              <input
                type="number"
                name="phone"
                value={phone}
                className="create_product_input_inner"
                onChange={(event) => setPhone(event.target.value)}
                required
              ></input>
            </div>
          </div>


          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Website</div>
            </div>

            <div>
              <input
                type="text"
                name="website"
                value={website}
                className="create_product_input_inner"
                onChange={(event) => setWebsite(event.target.value)}
                required
              ></input>
            </div>
          </div>


          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Price</div>
            </div>

            <div>

              <select
                required
                name="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                className="create_product_input_inner"
              >
                <option value="" disabled>
                  Select a price
                </option>
                {priceArr.map((price) => (
                  <option key={price} value={price}>
                    {price}
                  </option>
                ))}
              </select>
            </div>
          </div>




          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Category</div>

            </div>
            <div>

              <select
                required
                name="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="create_product_input_inner"
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categoryArr.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>


          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>BusinessHours</div>
              <div className="create_product_small_text">
                (i.e 09:00 AM - 11:00 PM )
              </div>
            </div>
            <div>
              <select
                required
                name="businessHours"
                value={businessHours}
                onChange={(event) => setBusinessHours(event.target.value)}
                className="create_product_input_inner"
              >
                <option value="" disabled>
                  Select a BusinessHours
                </option>
                {businessHoursArr.map((businessHour) => (
                  <option key={businessHour} value={businessHour}>
                    {businessHour}
                  </option>
                ))}
              </select>


            </div>





          </div>


          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>PreviewImage</div>
            </div>

            <div>
              <input
                type="text"
                name="previewImage"
                value={previewImage}
                className="create_product_input_inner"
                onChange={(event) => setPreviewImage(event.target.value)}
                required
              ></input>
            </div>
          </div>

          <div className="create_product_footer">
            <div className="create_product_footer2">
              <div>
                <button
                  className="create_product_cancel"
                  onClick={(event) => history.push("/bookstores/mybookstores")}
                >
                  Cancel
                </button>
              </div>

            </div>


            <div className="create_product_rightside">
              <button
                className="create_product_button"
                type="submit"
                // disabled={errors.length > 0}
              >
                Update a Bookstore
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>


  );
}


export default BookstoreUpdate;
//added some note
//add again

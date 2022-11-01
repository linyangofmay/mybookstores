import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateBookstore } from '../../store/bookstore'
import ImageCreate from './ImageCreate'
import './BookstoreCreate.css'


function BookstoreCreate() {

  const dispatch = useDispatch()
  const history = useHistory()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [website, setWebsite] = useState('')
  const [price, setPrice] = useState()
  const [category, setCategory] = useState('')
  const [businessHours, setBusinessHours] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longtitude, setLongtitude] = useState('')
  // const [url1, setUrl1] = useState('')
  // const [url2, setUrl2] = useState('')
  // const [url3, setUrl3] = useState('')
  const [images, setImages] = useState([])



  const priceArr = ['$', '$$', '$$$', '$$$$']
  const businessHoursArr = [['11:00AM', '7:00PM'], ['10:00AM', '9:00PM'], ['12:00PM', '10:00PM']]
  const categoryArr = ["usedBooks", "stationary", "CD & Video", "restroom", "multiple stories", "coffee", "kids", "lounge"]

  const [errors, setErrors] = useState([])

  const createBookstore = async (e) => {
    e.preventDefault();
    const newBookstore = {
      name,
      website,
      description,
      price,
      category,
      businessHours,
      phone,
      address,
      city,
      state,
      country,
      zipcode,
      latitude,
      longtitude,
      // url1:url1,
      // url2:url2,
      // url3:url3,
    };
    setErrors([]);
    const data = await dispatch(thunkCreateBookstore(newBookstore));
    if (data) {
      setErrors(data);
    } else {
      setErrors([]);
      return history.push(`/bookstoers/${newBookstore.id}`)
    }
  }

  return (

    <div className="create_product_main">

      <div className="create_product_div">
        <h1>List a Bookstore</h1>
        <form className="create_product_form" onSubmit={createBookstore}>

          <div className='login_form_error'>
            {errors.map((error, ind) => (
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

          <div className="create_product_input">
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
          </div>

          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>longtitude</div>
            </div>

            <div>
              <input
                type="number"
                name="longtitude"
                value={longtitude}
                className="create_product_input_inner"
                onChange={(event) => setLongtitude(event.target.value)}
                required
              ></input>
            </div>
          </div>

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


          <div className='create_bookstore_image_container'>
            <ImageCreate />

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
                disabled={errors.length > 0}
              >
                Create Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>


  );
}


export default BookstoreCreate

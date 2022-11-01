import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBookstore } from '../../store/bookstore'


function BookstoreCreate() {

  const dispatch = useDispatch()
  const hisotry = useHistory()
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
  const [longtitude, setLongitude] = useState('')
  const [url1, setUrl1] = useState('')
  const [url2, setUrl2] = useState('')
  const [url3, setUrl3] = useState('')
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
    };
    setErrors([]);
    const data = await dispatch(createBookstore(newBookstore));
    if (data) {
      setErrors(data);
    } else {
      setErrors([]);
      return history.push('/bookstoers/mybookstores')
    }
  }

  return (

    <div className="create_product_main">
      <div className="create_product_div">
        <h1>List a Bookstore</h1>
        <form className="create_product_form" onSubmit={onSubmit}>
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
              <div className="create_product_small_text">
                Start with a brief summary that describes your product's
                features.
              </div>
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
              <div>Price</div>
              <div className="create_product_small_text">
                Remember to factor in labor, cost of material, etc. Shipping
                is free to all customers.
              </div>
            </div>
            <div>
              <input
                type="number"
                name="price"
                value={price}
                className="create_product_input_inner"
                onChange={(event) => setPrice(event.target.value)}
                min="1"
                max="1000000"
              ></input>
            </div>
          </div>
          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Category</div>
              <div className="create_product_small_text">
                Type a two word description to get category suggestions that
                will help buyers find when they want.
              </div>
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
          <div className="create_product_input">
            <div className="create_product_text_box">
              <div>Image</div>
              <div className="create_product_small_text">
                Add a url photo so buyers can see the product
              </div>
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
                  onClick={(event) => history.push("/")}
                >
                  Cancel
                </button>
              </div>
              <div className="create_product_cancel_text">
                <span className="create_product_cancel_bold">
                  This listing isn't active yet.
                </span>{" "}
                It will be available to shoppers once you enlist your product.
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

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams, } from "react-router-dom";
import { thunkCreateImage } from '../../store/image'

function CreateImage() {
  const history = useHistory();
  const { bookstoreId } = useParams();
  const dispatch = useDispatch();
  const [uploadImg, setImg] = useState(null);
  const [imgUp, setImgUp] = useState(false);
  const [url, setUrl] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const user = useSelector(state => state?.session?.user);
  const reset = () => {
    setImg(null);
  }

  const createimg = async (e) => {
    e.preventDefault();
    setImgUp(true);
    setSubmitted(true);

    if (!validationErrors.length) {
      const payload = {
        url,
        bookstoreId

      }

      const newimg = await dispatch(thunkCreateImage(payload));
      if (newimg) {
        reset();
        setSubmitted(false);
        setImgUp(false);
        setValidationErrors([]);

      }
    }
  }


  return (
    <>
    <div calssName='addimageform'>
      <form onSubmit={createimg}>
        <div className= 'add_image_errors'>
          {submitted && validationErrors.length>0 && (
            <div>
            {validationErrors.map((error, i) => (
              <div key={i}>{error}</div>
            ))}
            </div>
          )}
        </div>

        <div className='img_url_container'>
          <h2>Select your images </h2>
          <input>
              className='create_img_url'
              type ='string'
              name ='url'
              value={url}

              onChange={(event) => setImg(event.target.value)}
              required


          </input>

        </div>

        <div className='cancle_subimt_btn_container'>
          <button className='addimg_cancle_btn' type='button' onClick={() => reset()}>Cancle</button>
          <button className='addimg_submit_btm' type ='submit'>Upload</button>
        </div>

      </form>

    </div>
    </>
  )
}




  export default CreateImage

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams, } from "react-router-dom";
import { thunkCreateImage } from '../../store/image'

function CreateImage() {
  const history = useHistory();
  const { bookstoreId } = useParams();
  const dispatch = useDispatch();

  const [createdUrl, setCreatedUrl] = useState('');
  // const [createdUrl2, setCreatedUrl2] = useState('');
  // const [createdUrl3, setCreatedUrl3] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [image, setImage] = useState('')
  const [error, setErrors] = useState('')
  const user = useSelector(state => state?.session?.user);
  const imageregx = /\.(jpeg|jpg|png|svg)$/

  useEffect(() =>{
    let errors = []
    if ((image.length < 2 || !image.split('?')[0].match(imageregx) && !image.includes("https://images.unsplash.com/photo"))) {
        errors.push("image: must be a valid type: jpg, jpeg, png, svg.")
      }
      setErrors(errors)


  }, [image])

  const createimg = async (e) => {
    e.preventDefault();
    setSubmitted(true);

     const payload = {
      bookstoreId:bookstoreId,
      url: createdUrl,
     }
    //  console.log('payload----', payload);
     let createdimage = await dispatch(thunkCreateImage(payload))

     if(createdimage){
      history.push(`/images/bookstores/${payload.id}`)
     }
  }


  return (
    <>
    <div className='addimageform'>
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
          <h2>Upload your images </h2>
          <input
              className='create_img_url'
              type ='string'
              name ='createdUrl'
              value={createdUrl}

              onChange={(event) => setCreatedUrl(event.target.value)}
              required
         />
        </div>



        <div className='cancle_subimt_btn_container'>
          {/* <button className='addimg_cancle_btn' type='button' onClick={() => reset()}>Cancle</button> */}
          {/* <button className='addimg_submit_btm' type ='submit'>Upload</button> */}
        </div>

      </form>

    </div>
    </>
  )
}




  export default CreateImage

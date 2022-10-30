// TYPES

const createImage = '/image/createImage'
const getAllBookstoreImage = '/image/getAllBookstoreImage'


const deleteImage = '/review/deleteImage'


// ACTION CREATORS

const actionCreateImage = (image) => {
    return {
        type: createImage,
        image
    }
}

const actionGetAllBookstoreImage = (images) => {
    return {
        type: getAllBookstoreImage,
        images
    }
}





const actionDeleteImage = (id) => {
    return {
        type: deleteImage,
        id
    }
}


// THUNKS
export const thunkGetAllBookstoreImage = (id) => async dispatch => {
  const res = await fetch(`/api/images/bookstores/${id}`, {
    method: "GET",
  });


  if (res.ok) {
      const data = await res.json()
      dispatch(actionGetAllBookstoreImage(data))
  }
}


export const thunkCreateImage = (image) => async dispatch => {
    const res = await fetch(`/api/images/bookstores/${image.bookstoreId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(image)
    });

    if(res.ok) {
        const data = await res.json()
        dispatch(actionCreateImage(data))
        return data
    }
}


export const thunkDeleteReview = (id) => async dispatch => {
    const res = await fetch(`/api/images/${id}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(actionDeleteImage(id))
    }
}

const initialState = {}
const imageReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case createImage:
            newState[action.image.id] = action.image
            return newState

        case getAllBookstoreImage:
            newState = {};
            action.image.bookstore_images.forEach((image) => {
                newState[image.id] = image;
            });
            return newState


        case deleteImage:
            delete newState[action.id]
            return newState

        default:
            return state
    }
}



export default imageReducer

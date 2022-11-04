// TYPES
const getAllReview = '/reviews/getAllReview'
const createReview = '/review/createReview'
const getOneBookstoreReview = '/review/getOneBookstoreReview'
const getCurrentReview = '/review/getCurrentReview'
const updateReview = '/review/updateReview'
const deleteReview = '/review/deleteReview'


// ACTION CREATORS


const actionCreateReview = (review) => {
    return {
        type: createReview,
        review
    }
}

const actionGetAllReview =(reviews) => {
    return {
      type: getAllReview,
      reviews
    }
}

const actionGetOneBookstoreReview = (reviews) => {
    return {
        type: getOneBookstoreReview,
        reviews
    }
}

const actionGetCurrentReview = (reviews) => {
    return {
        type: getCurrentReview,
        reviews
    }
}

const actionUpdateReview = (review) => {
    return {
        type: updateReview,
        review
    }
}

const actionDeleteReview = (id) => {
    return {
        type: deleteReview,
        id
    }
}


// THUNKS


export const thunkCreateReview = (payload) => async dispatch => {

    const res = await fetch(`/api/reviews/bookstores/${payload.bookstoreId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if(res.ok) {
        const data = await res.json()
        dispatch(actionCreateReview(data))
        return data
    }
}

export const thunkGetAllReview = () => async dispatch => {
  const res = await fetch("/api/reviews/", {
    method:"GET",
    headers:{"Content-Type": "application/json" },
  });
  if (res.ok){
    const data = await res.json()
    dispatch(actionGetAllReview(data))
  }
}

export const thunkGetOneBookstoreReview = (id) => async dispatch => {
    const res = await fetch(`/api/reviews/bookstores/${id}`, {
      method: "GET",
    });


    if (res.ok) {
        const data = await res.json()
        dispatch(actionGetOneBookstoreReview(data))
    }
}


export const thunkGetCurrentReview = () => async dispatch => {
    const res = await fetch('/api/reviews/user_reviews')

    if (res.ok) {
        const data = await res.json()
        dispatch(actionGetCurrentReview(data))
    }
}


export const thunkUpdateReview = (bookstore) => async dispatch => {
    const res = await fetch(`/api/reviews/${bookstore.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookstore),
    });


    if (res.ok) {
        const data = await res.json()
        dispatch(actionUpdateReview(data))
        return data
    }
}


export const thunkDeleteReview = (id) => async dispatch => {
    const res = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(actionDeleteReview(id))
    }
}

const initialState = {}
const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    // console.log(' action123-----',  action)
    switch (action.type) {
        case createReview:
            newState[action.review.id] = action.review
            return newState
        case getAllReview:
            newState = {};
            action.reviews.reviews.forEach((review) => {
              newState[review.id] = review;
            })
            return newState

        case getOneBookstoreReview:
            newState = {};
            action.reviews.bookstore_reviews.forEach((review) => {
                newState[review.id] = review;
            });
            return newState

        case getCurrentReview:
            newState = {};
            action.reviews.user_reviews.forEach((review) => {
                newState[review.id] = review;
            });
            return newState
        case updateReview:
            newState[action.review.id] = action.review
            return newState
        case deleteReview:
            delete newState[action.id]
            return newState
        default:
            return state
    }
}



export default reviewReducer

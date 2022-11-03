//Types
const getAllBookstore = '/bookstore/getAllBookstore'
const getOneBookstore = '/bookstore/getOneBookstore'
const getCurrentBookstore = '/bookstore/getCurrentBookstore'
const createBookstore = '/bookstore/createBookstore'
const updateBookstore = '/bookstore/updateBookstore'
const deleteBookstore = '/bookstore/deleteBookstore'

//Actions

const actionGetAllBookstore = (bookstores) => {
  return {
    type: getAllBookstore,
    bookstores
  }
}

const actionGetOneBookstore = (bookstore) => {
  return {
    type: getOneBookstore,
    bookstore
  }
}

const actionGetCurrentBookstore = (bookstores) => {
  return {
    type: getCurrentBookstore,
    bookstores
  }
}

const actionCreateBookstore = (bookstore) => {
  return {
      type: createBookstore,
      bookstore
  }
}

const actionUpdateBookstore = (bookstore) => {
  return {
    type: updateBookstore,
    bookstore
  }
}

const actionDeleteBookstore = (id) => {
  return {
    type: deleteBookstore,
    id
  }
}



//Thunks
export const thunkGetAllBookstore = () => async dispatch => {
  const res = await fetch("/api/bookstores/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    const data = await res.json()
    dispatch(actionGetAllBookstore(data))
  }
}

//get bookstore details by bookstore ID
export const thunkGetOneBookstore = (id) => async dispatch => {
  const res = await fetch(`/api/bookstores/${id}`, {
    method: "GET",
    header: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json()
    dispatch(actionGetOneBookstore(data))
  }
}

export const thunkGetCurrentBookstore = () => async dispatch => {
  const res = await fetch('/api/bookstores/current', {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(actionGetCurrentBookstore(data))
  }
}
//create one
export const thunkCreateBookstore = (bookstore) => async dispatch => {
  const res = await fetch('/api/bookstores/new', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(bookstore)
  })
  if (res.ok) {
      const data = await res.json()
      dispatch(actionCreateBookstore(data))
      return data
  }
  const data = res.json()
  console.log('data========', data.errors)
}

export const thunkUpdateBookstore = (bookstore, id) => async dispatch => {
  const res = await fetch(`/api/bookstores/${id}/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookstore),
  });
  console.log('bookstore-----------', bookstore)
  console.log('id========', id)

  if (res.ok) {
      const data = await res.json()
      dispatch(actionUpdateBookstore(data))
      return data
  }
  //  const data = res.json()
  //   console.log('updateddata =======', data.errors)

}

export const thunkDeleteBookstore = (id) => async dispatch => {
  const res = await fetch(`/api/bookstores/${id}`, {
      method: 'DELETE'
  })

  if (res.ok) {
      dispatch(actionDeleteBookstore(id))
  }
}






//reducers
const initialState = {}
const bookstoreReducer = (state = initialState, action) => {
  let newState = { ...state }
  switch (action.type) {

    case createBookstore:
      newState[action.bookstore.id] = action.bookstore;
      return newState;

    case getAllBookstore:
      newState = {};
      //console.log('action.bookstores.bookstores--------', action.bookstores)
      //console.log('action--------', action)
      action.bookstores.bookstores.forEach((bookstore) => {
        newState[bookstore.id] = bookstore;
      })
      return newState;

    case getOneBookstore:
      newState = {};
      newState[action.bookstore.id] = action.bookstore
      return newState

    case getCurrentBookstore:
      newState ={};
      action.bookstores.bookstores.forEach((bookstore) =>{
        newState[bookstore.id] = bookstore;
      });
      return newState;

    case updateBookstore:
      newState[action.bookstore.id] = action.bookstore
      return newState;

    case deleteBookstore:
      delete newState[action.id]
      return newState;

    default:
      return state;
  }
}

export default bookstoreReducer

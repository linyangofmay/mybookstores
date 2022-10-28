//Types
const createBookstore = '/bookstore/createBookstore'
const getAllBookstore = '/bookstore/getAllBookstore'
const getCurrentBookstore = '/bookstore/getCurrentBookstore'
const getOneBookstore = '/bookstore/getOneBookstore'
const updateBookstore = '/bookstore/updateBookstore'
const deleteBookstore = '/bookstore/deleteBookstore'

//Actions

const actionGetAllBookstore = (bookstores) =>{
  return {
    type:getAllBookstore,
    bookstores
  }
}

const actionGetOneBookstore = (bookstore) =>{
  return {
    type: getOneBookstore,
    bookstore
  }
}

const actionGetCurrentBookstore = (bookstores) =>{
  return {
    type: getCurrentBookstore,
    bookstores
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
export const thunkGetAllBookstore = ()=> async dispatch =>{
  const res = await fetch("/api/bookstores/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
  });
  if (res.ok){
     const data = await res.json()
     dispatch(actionGetAllBookstore(data))
  }
}

export const thunkGetOneBookstore = (id) => async dispatch =>{
   const res = await fetch(`/api/bookstores/${id}`, {
    method: "GET",
    header: {"Content-Type": "application/json"},
   });

   if (res.ok) {
    const data = await res.json()
    dispatch(actionGetOneBookstore(data))
   }
}



//reducers
const initialState = {}
const bookstoreReducer = (state =initialState, action) =>{
  let newState= {...state}
  switch (action.type){
    case getAllBookstore:
      newState ={};
      //console.log('action.bookstores.bookstores--------', action.bookstores)
      //console.log('action--------', action)
      action.bookstores.bookstores.forEach((bookstore) => {
        newState[bookstore.id] =bookstore;
      })
      return newState;

    case getOneBookstore:
      newState = {};
      newState[action.bookstore.id] = action.bookstore
      return newState



   default:
     return state;
  }
}

export default bookstoreReducer

// Action Types
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'
const GET_WISHLIST = 'GET_WISHLIST'

// Action Creators
const addToWishlist = payload => ({
  type: ADD_TO_WISHLIST,
  payload
})

const removeFromWishlist = payload => ({
  type: REMOVE_FROM_WISHLIST,
  payload
})

const getWishlist = payload => ({
  type: GET_WISHLIST,
  payload
})

export default {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  GET_WISHLIST,
  addToWishlist,
  removeFromWishlist,
  getWishlist
}

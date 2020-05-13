// Action Types
const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
const SEARCH_RESULTS_RECIEVED = 'SEARCH_RESULTS_RECIEVED'
const SEARCH_CANCELLED = 'SEARCH_CANCELLED'
const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';

// Action Creators
const setSearchQuery = payload => ({
  type: SET_SEARCH_QUERY,
  payload
})

const fetchSearchResults = payload => ({
  type: FETCH_SEARCH_RESULTS,
  payload
})


const resetSearchQuery = payload => ({
  type: SEARCH_CANCELLED,
  payload
})


const searchResultsRecieved = payload => ({
  type: SEARCH_RESULTS_RECIEVED,
  payload
})


export default {
  SET_SEARCH_QUERY,
  SEARCH_RESULTS_RECIEVED,
  SEARCH_CANCELLED,
  FETCH_SEARCH_RESULTS,
  setSearchQuery,
  fetchSearchResults,
  resetSearchQuery,
  searchResultsRecieved,
}

// Action Types
const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
const SEARCH_RESULTS_RECIEVED = 'SEARCH_RESULTS_RECIEVED'
const GET_CACHED_RESULTS = 'GET_CACHED_RESULTS';
const SET_CACHED_RESULTS = 'SET_CACHED_RESULTS';
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


const getCachedResults = payload => ({
  type: GET_CACHED_RESULTS,
  payload
})


const setCachedResults = payload => ({
  type: SET_CACHED_RESULTS,
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
  GET_CACHED_RESULTS,
  SET_CACHED_RESULTS,
  FETCH_SEARCH_RESULTS,
  setSearchQuery,
  fetchSearchResults,
  getCachedResults,
  setCachedResults,
  resetSearchQuery,
  searchResultsRecieved,
}

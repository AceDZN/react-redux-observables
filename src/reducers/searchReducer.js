import Actions from '../actions'

const initialState = {
  searchQuery: '',
  searchResults: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
        isLoading: true
      }
    case Actions.SEARCH_RESULTS_RECIEVED:
      return {
        ...state,
        searchResults: action.payload,
        isLoading: false
      }

    case Actions.SEARCH_CANCELLED:
      return {
        ...state,
        searchResults: [],
        isLoading: false
      }
    default:
      return state
  }
}

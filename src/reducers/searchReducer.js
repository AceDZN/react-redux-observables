import Actions from '../actions'
const initialState = {
  searchQuery: '',
  searchResults: [],
  cachedResults:  {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_SEARCH_QUERY:
    return {
      ...state,
      searchQuery: action.payload,
      isLoading: true
    }

      
    case Actions.GET_CACHED_RESULTS:
      return {
        ...state,
        isLoading: true
      }
    case Actions.SET_CACHED_RESULTS:
      const {cachedResults} = state;
      const new_res = { ...cachedResults };
      new_res[state.searchQuery] = action.payload;
      return {
        ...state,
        isLoading: true,
        cachedResults: new_res
      }
    case Actions.FETCH_SEARCH_RESULTS:
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

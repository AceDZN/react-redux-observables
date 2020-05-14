import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appReducer, { loadingReducer } from './appReducer'
import tabOneReducer from './tabOneReducer'
import searchReducer from './searchReducer'
import wishListReducer from './wishListReducer'



export default history =>
  combineReducers({
    router: connectRouter(history),
    appReducer,
    loadingReducer,
    tabOneReducer,
    searchReducer,
    wishListReducer
  })

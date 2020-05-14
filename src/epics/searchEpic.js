import { of, Observable, timer  } from 'rxjs'
import { ajax } from 'rxjs/ajax';

import { switchMap, mergeMap, debounceTime, catchError,takeUntil, filter, tap, take, share, mapTo} from 'rxjs/operators'

import { ofType } from 'redux-observable'
import { getJSON } from '../utils/ajaxUtils'

import Actions from '../actions'

const URLS = {
  SEARCH: 'http://ops.avonow.com/api/v1/products/search?query='
}


export const getCachedResultsEpic = (action$, store) => action$.pipe(
  ofType(Actions.GET_CACHED_RESULTS),
  switchMap((action) =>{
    const {  searchReducer } = store.value;
    const query = action.payload;
    
    if(searchReducer.cachedResults && searchReducer.cachedResults[query]){
      return of(Actions.searchResultsRecieved(searchReducer.cachedResults[query]))
    }
    
    return of(Actions.fetchSearchResults(query))

  })
)  

export const fetchSearchResultsEpic = (action$) => action$.pipe(
  ofType(Actions.FETCH_SEARCH_RESULTS),
  switchMap((action) =>{
    const query = action.payload;
    return getJSON(URLS.SEARCH + query).pipe(
      takeUntil(action$.pipe(
        filter(action => action.type === Actions.SEARCH_CANCELLED)
      )),
      mergeMap(response => {
        return of(Actions.setCachedResults(response))
      }),
      catchError(error => of(Actions.fetchRejected(error)))
    )
  })
)  

export const setCachedResultsEpic = (action$) => action$.pipe(
  ofType(Actions.SET_CACHED_RESULTS),
  mergeMap(action =>  {
    return of(Actions.searchResultsRecieved(action.payload));
  })
)
export const setSearchQueryEpic = (action$) => action$.pipe(
  ofType(Actions.SET_SEARCH_QUERY),
  debounceTime(500),
  mergeMap(response => of(Actions.getCachedResults(response.payload)))
)
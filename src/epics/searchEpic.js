import { of, Observable, timer  } from 'rxjs'
import { ajax } from 'rxjs/ajax';


import { switchMap, mergeMap, debounceTime, catchError,takeUntil, filter, tap, take, share} from 'rxjs/operators'

import { ofType } from 'redux-observable'
import { getJSON } from '../utils/ajaxUtils'
import  Memoizer  from '../utils/memoizer'

import Actions from '../actions'

const URLS = {
  SEARCH: 'http://ops.avonow.com/api/v1/products/search?query='
}





const memoise = (func) => {
  let cache = {};

  return (...args) => {
    const cacheKey = JSON.stringify(args)
    cache[cacheKey] = cache[cacheKey] || func(...args).pipe(share());
    return cache[cacheKey];
  }
}
const getJSONCached = Memoizer.memo(getJSON);
const getJSONCache = memoise(getJSON)



export const fetchSearchResultsEpic = (action$) => action$.pipe(
  ofType(Actions.FETCH_SEARCH_RESULTS),
  debounceTime(500),
  switchMap((e) =>{
    return getJSONCached(URLS.SEARCH + e.payload).pipe(
      takeUntil(action$.pipe(
        filter(action => action.type === Actions.SEARCH_CANCELLED)
      )),
      mergeMap(response => of(Actions.searchResultsRecieved(response))),
      catchError(error => of(Actions.fetchRejected(error)))
    )}
    ) 
  )  



export const setSearchQueryEpic = (action$) => action$.pipe(
    ofType(Actions.SET_SEARCH_QUERY),
    debounceTime(500),
    switchMap((e) =>{
      return getJSONCached(URLS.SEARCH + e.payload).pipe(
        takeUntil(action$.pipe(
          filter(action => action.type === Actions.SEARCH_CANCELLED)
        )),
        mergeMap(response => of(Actions.searchResultsRecieved(response))),
        catchError(error => of(Actions.fetchRejected(error)))
      )}
      ) 
    )  
  

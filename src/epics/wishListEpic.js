import { of, Observable, timer  } from 'rxjs'
import { ajax } from 'rxjs/ajax';

import { switchMap, mergeMap, debounceTime, catchError,takeUntil, filter, tap, take, share, mapTo} from 'rxjs/operators'

import { ofType } from 'redux-observable'
import { getJSON } from '../utils/ajaxUtils'

import Actions from '../actions'


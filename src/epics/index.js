import { combineEpics } from 'redux-observable'
import * as tabOneEpic from './tabOneEpic'
import * as searchEpic from './searchEpic'
import * as wishListEpic from './wishListEpic'


export default combineEpics(
  ...Object.values({
    ...tabOneEpic,
    ...searchEpic,
    ...wishListEpic
  })
)

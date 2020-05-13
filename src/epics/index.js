import { combineEpics } from 'redux-observable'
import * as tabOneEpic from './tabOneEpic'
import * as searchEpic from './searchEpic'

export default combineEpics(
  ...Object.values({
    ...tabOneEpic,
    ...searchEpic
  })
)

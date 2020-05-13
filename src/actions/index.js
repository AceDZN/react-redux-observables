import appActions from './appActions'
import tabOneActions from './tabOneActions'
import searchActions from './searchActions'

export default {
  ...appActions,
  ...searchActions,
  ...tabOneActions
}

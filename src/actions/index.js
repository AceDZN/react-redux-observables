import appActions from './appActions'
import tabOneActions from './tabOneActions'
import searchActions from './searchActions'
import wishListActions from './wishListActions'

export default {
  ...appActions,
  ...searchActions,
  ...tabOneActions,
  ...wishListActions

}

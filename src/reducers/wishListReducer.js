import Actions from '../actions'


const initialState = {
  isLoading: true,
  wishList: {},
  wishListItems:  []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_WISHLIST:
      return {
        ...state
      }

    case Actions.ADD_TO_WISHLIST:
      const listItems =  [...state.wishListItems, action.payload.sku];
      const list = {...state.wishList};
      list[action.payload.sku] = action.payload;
      return {
        ...state,
        wishList: list,
        wishListItems:listItems
      }

    case Actions.REMOVE_FROM_WISHLIST:
      let newArray = state.wishListItems.filter( (item) => {
        if(item !== action.payload) return item;
      });
      return {
        ...state,
        wishListItems:newArray
      }
    
    default:
      return state
  }
}

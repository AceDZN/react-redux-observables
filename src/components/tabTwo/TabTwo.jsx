import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Actions from '../../actions'
import SearchBox from '../searchBox';
import WishList from '../WishList';

const TabOne = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.getWishlist())
  }, [dispatch])


  return (
    <div>
      <WishList />
    </div>
  )
}

export default TabOne

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Actions from '../../actions'
import SearchBox from '../searchBox';
import SearchResults from '../searchResults';

const TabOne = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.requestTabOneData())
  }, [dispatch])


  return (
    <div>
      <SearchBox />
      <SearchResults />
    </div>
  )
}

export default TabOne

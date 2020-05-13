import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Actions from '../../actions'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  root: {
    display: 'flex',
    width: '100%',
    maxWidth: '900px',
    margin: 'auto',
    padding: '1rem',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 88,
    transition: 'height 540ms ease-in-out',

    '&.empty': {
      height: 'calc(100vh - 64px - 88px)'
    },
  },
  content: {
    flexGrow: 1,
  },

  input: {
    width: '50%'
  },
  button: {
    width: '40%',
    height: 56
  }
}))

const products = ['bread', 'milk', 'eggs', 'wheat', 'cleaning', 'solution', 'Avocado', 'Towels', 'Wood', 'trip', 'camping', 'coca cola', 'chips'];


const SearchBox = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery || searchQuery.length < 3) {
      dispatch(Actions.resetSearchQuery())
    } else {
      dispatch(Actions.setSearchQuery(searchQuery))
    }
  }, [dispatch, searchQuery])



  const setSearchValue = event => setSearchQuery(event.target.value);

  const getRandomProduct = (currentProduct) => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    if (randomProduct === currentProduct)
      return getRandomProduct(currentProduct)
    return randomProduct
  };
  const searchRandomProduct = () => {
    setSearchQuery(getRandomProduct());
  }

  return (
    <div className={`${classes.root} ${searchQuery.length < 3 ? 'empty' : ''}`}>
      <TextField className={classes.input} label="Search" variant="outlined" value={searchQuery} onChange={setSearchValue} />
      <Button className={classes.button} onClick={searchRandomProduct}>get random item</Button>
    </div>
  )
}

export default SearchBox

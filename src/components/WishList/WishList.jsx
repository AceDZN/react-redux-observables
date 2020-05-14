import React, { useState } from 'react'
import { connect } from 'react-redux'
import SingleResult from '../searchResults/SingleResult';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Grid, Typography, Paper, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, .1)',
      outline: '1px solid slategrey'
    }
  },
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
    width: `calc(100% - 2.5em)`,
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 64px - 88px)'
  },
  resultsContainer: {
    display: 'grid',
    gridGap: '1.25em',
    gridAutoFlow: 'dense',
    gridTemplateColumns: 'repeat(4, 1fr)',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }

}))


const WishList = ({ wishListItems, wishList }) => {
  const classes = useStyles();

  const [snackbarMessage, setsnackbarMessage] = useState('');
  const [snackbarVisible, setsnackbarVisibility] = useState(false);

  const handleCloseSnackbar = () => {
    setsnackbarVisibility(false);
  }

  const activateSnackbar = (message) => {
    setsnackbarMessage(message);
    setsnackbarVisibility(true);
  }

  const remderWishListItems = () => {
    return wishListItems.length ? (
      <Grid container justify="center" padding="36" className={classes.resultsContainer}>
        {
          wishListItems.map(sku => {
            const wishListItemProp = wishList[sku];
            return <SingleResult activateSnackbar={activateSnackbar} key={sku} {...wishListItemProp} is_favorite={wishListItems.includes(sku)} />
          })
        }
      </Grid>
    ) : null
  }


  const getWishListTitle = () => {
    return !wishListItems || !wishListItems.length ? `Your Wishlist is empty` : `You have ${wishListItems.length} item${wishListItems.length > 1 ? 's' : ''} in your Wishlist`;
  }

  return (
    <div className={classes.root}>

      <Grid container justify="center" padding="36" className={classes.header}>
        <Typography align-items="center" variant="h5" color="primary" component="h2" className={classes.price}>
          {getWishListTitle()} <ShoppingCartIcon color="primary" className={classes.extendedIcon} fontSize="large" />
        </Typography>
      </Grid>

      <Paper className={classes.paper}>

        {remderWishListItems()}
        <Grid container justify="center" padding="36" className={classes.footer}>
          <Typography align-items="center" variant="h6" color="secondary" component="h4" className={classes.price}>
            {wishListItems.length}
          </Typography>
        </Grid>
      </Paper>
    </div >
  )
}

const mapStateToProps = ({ wishListReducer }) => {
  return {
    wishList: wishListReducer.wishList,
    wishListItems: wishListReducer.wishListItems
  }
}
export default connect(
  mapStateToProps
)(WishList)
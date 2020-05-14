import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import SingleResult from './SingleResult';
import { Grid, CircularProgress } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    transition: 'opacity 320ms ease-in-out',
    '&.hidden': {
      opacity: 0
    }
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
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
  loader: {
    minHeight: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footer: {
    display: 'flex',
    justifyContent: 'end',
    padding: '1em 0 0'
  }

}))


const SearchResults = ({ searchResults, isLoading, searchQuery, wishListItems }) => {
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


  if (isLoading) {
    return (
      <div className={classes.root}>
        <Grid container justify="center" className={classes.loader}>
          <CircularProgress color="primary" />
        </Grid>
      </div>
    )
  }


  return (
    <div className={`${classes.root} ${searchResults.length ? 'shown' : 'hidden'}`}>
      <Paper className={classes.paper}>
        <div className={classes.resultsContainer}>
          {searchResults.length ? searchResults.map(result => <SingleResult activateSnackbar={activateSnackbar} key={result.sku} {...result} is_favorite={wishListItems.includes(result.sku)} />) : null}
        </div>
        <div className={classes.footer}>
          <Grid container justify="center" padding="16">
            {searchQuery}
          </Grid>
        </div>
      </Paper>
      <Snackbar
        color="primary"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        key={`bottom,center`}
        open={snackbarVisible}
        autoHideDuration={2500}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </div>
  )
}

const mapStateToProps = ({ searchReducer, wishListReducer }) => {
  return {
    searchQuery: searchReducer.searchQuery,
    searchResults: searchReducer.searchResults,
    isLoading: searchReducer.isLoading,
    wishListItems: wishListReducer.wishListItems
  }
}
export default connect(
  mapStateToProps
)(SearchResults)
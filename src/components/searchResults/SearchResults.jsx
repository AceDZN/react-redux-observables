import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import SingleResult from './SingleResult';
import { Grid, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 64px - 88px)'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    maxWidth: '100px',
    maxHeight: '100px',
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
  result: {
    // flexGrow: 1
  }
}))


const SearchResults = ({ searchResults, isLoading }) => {
  const classes = useStyles();
  if (isLoading) {
    return (
      <div className={classes.root}>
        <Grid container justify="center" className={classes.loader}>
          <CircularProgress color="primary" />
        </Grid>
      </div>
    )
  }
  return searchResults.length ? (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.resultsContainer}>
          {searchResults.map(result => <SingleResult key={result.sku} {...result} />)}
        </div>
      </Paper>
    </div>
  ) : null

}

const mapStateToProps = ({ searchReducer }) => {
  return {
    searchResults: searchReducer.searchResults,
    isLoading: searchReducer.isLoading
  }
}
export default connect(
  mapStateToProps
)(SearchResults)
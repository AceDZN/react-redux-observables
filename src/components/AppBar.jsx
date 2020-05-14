import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
  Link,
  Box,
  Badge
} from '@material-ui/core'
import { connect } from 'react-redux'

import { Link as RouterLink } from 'react-router-dom'
import ROUTES from '../consts/routesConsts'
import LocalMallIcon from '@material-ui/icons/LocalMall';

const useAppBarStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
}))

const useAppBarItemStyles = makeStyles(theme => ({
  link: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  }
}))

const AppBarItem = ({ label, to }) => {
  const classes = useAppBarItemStyles()

  return (
    <Link
      component={RouterLink}
      to={to}
      color="inherit"
      className={classes.link}
    >
      {label}
    </Link>
  )
}

const AppBar = ({ wishListItems }) => {
  const classes = useAppBarStyles()
  const renderWishlistBadge = () => {
    return (
      <Badge badgeContent={wishListItems.length} color="secondary">
        <LocalMallIcon fontSize="large" />
      </Badge>
    )
  }

  return (
    <MUIAppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link component={RouterLink} to={ROUTES.ROOT}>
          <Typography variant="h6" color="textSecondary">
            Project
          </Typography>
        </Link>
        <Box mr="20px">
          <AppBarItem label="Search" to={ROUTES.TAB_ONE} />
          <AppBarItem label="Wishlist" to={ROUTES.TAB_TWO} />

          <AppBarItem label={renderWishlistBadge()} to={ROUTES.TAB_TWO} />
        </Box>
      </Toolbar>
    </MUIAppBar>
  )
}

const mapStateToProps = ({ wishListReducer }) => {
  return {
    wishListItems: wishListReducer.wishListItems
  }
}


export default connect(
  mapStateToProps
)(AppBar)
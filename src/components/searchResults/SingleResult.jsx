import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Actions from '../../actions'

import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    transition: 'background-color 320ms ease-in-out',
    backgroundColor: 'rgba(255,255,255,.25)',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,.15)'
    }

  },
  media: {
    height: 140,
    transition: 'height 320ms ease-in-out',

  },
  mediaActive: {
    height: '20em'
  },
  result: {
    display: 'flex',

  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 0
  },
  name: {
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    '-moz-line-clamp': 2,
    display: '-webkit-box',
    whiteSpace: 'normal',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: 56
  },
  unit: {
    padding: '0 0 10px 0',
    display: 'flex',
  },
  price: {
    display: 'flex',
    textShadow: '0 0 2px #9099ad',
    fontWeight: 'bold',
    color: '#0c1426'
  },

  card: {
    width: '100%',
    height: '20rem',
    position: 'relative',
    borderRadius: '0.5rem',
    background: '#fff top center no-repeat',
    backgroundSize: 'cover',
    boxShadow: ' 0 0.2rem 8.4rem 0 rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
  },
  pricingRow: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  favorite: {
    transform: 'translate(50%, -50%)'
  },
  extendedIcon: {
    filter: 'drop-shadow(0 0 2px #9099ad)',
    color: '#0c1426'

  }

}))


const SingleResult = (props) => {
  const {
    category,
    image_url,
    name,
    price,
    sku,
    unit,
    is_favorite, activateSnackbar } = props;

  const classes = useStyles();
  const dispatch = useDispatch();

  const [imageEnlarged, enlargeImage] = useState(false);

  const toggleImageZoom = () => enlargeImage(!imageEnlarged);

  const [isFavorite, setFavouriteState] = useState(is_favorite);


  const toggleFavorite = () => {
    if (!isFavorite) {
      activateSnackbar(`Item was added to Wishlist`);
      dispatch(Actions.addToWishlist({
        category,
        image_url,
        name,
        price,
        sku,
        unit,
        is_favorite
      }))
    } else {
      activateSnackbar(`Item removed from Wishlist`);
      dispatch(Actions.removeFromWishlist(sku))
    }
    setFavouriteState(!isFavorite)
  }


  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={`${classes.media} ${imageEnlarged ? classes.mediaActive : ''}`}
          image={image_url}
          title={name}
          onClick={toggleImageZoom}
        />
        <Fab size="small" color="primary" aria-label="favorite" color={isFavorite ? 'primary' : 'secondary'} className={classes.favorite} onClick={toggleFavorite}>
          <FavoriteIcon />
        </Fab>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="subtitle1" component="h2" className={classes.name}>
            {name}
          </Typography>
          <div className={classes.pricingRow}>
            <Typography gutterBottom variant="caption" color="textSecondary" component="p">{category}</Typography>
            <Typography gutterBottom variant="caption" color="textSecondary" component="p">{sku}</Typography>
          </div>
          <div className={classes.pricingRow}>
            <Typography variant="subtitle2" color="textSecondary" component="p" className={classes.unit}>
              {unit}
            </Typography>
            <Typography variant="h5" color="primary" component="h2" className={classes.price}>
              ${price} <ShoppingCartIcon color="primary" className={classes.extendedIcon} />
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div >
  )

}

export default SingleResult
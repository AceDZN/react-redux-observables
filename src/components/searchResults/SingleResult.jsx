import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,

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
    flexDirection: 'column'
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
  price: {
    padding: '0 0 10px 0',
    display: 'flex'
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
  }
}))


const SingleResult = (props) => {
  const {
    category,
    image_url,
    name,
    price,
    sku,
    unit } = props;

  const classes = useStyles();

  const [imageEnlarged, enlargeImage] = useState(false);

  const toggleImageZoom = () => enlargeImage(!imageEnlarged);


  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>

          <CardMedia
            className={`${classes.media} ${imageEnlarged ? classes.mediaActive : ''}`}
            image={image_url}
            title={name}
            onClick={toggleImageZoom}
          />

          <CardContent className={classes.content}>
            <Typography gutterBottom variant="subtitle1" component="h2" className={classes.name}>
              {name}
            </Typography>


            <div className={classes.pricingRow}>
              <Typography gutterBottom variant="caption" color="textSecondary" component="p">{category}</Typography>
              <Typography gutterBottom variant="caption" color="textSecondary" component="p">{sku}</Typography>
            </div>

            <div className={classes.pricingRow}>
              <Typography variant="subtitle2" color="textSecondary" component="p" className={classes.price}>
                {unit}
              </Typography>
              <Typography variant="subtitle1" color="primary" component="h2" className={classes.price}>
                ${price} <ShoppingCartIcon color="primary" className={classes.extendedIcon} />
              </Typography>
            </div>
          </CardContent>


        </CardActionArea>
      </Card>

    </div >
  )

}

export default SingleResult
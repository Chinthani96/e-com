import { Button, Card, CardActions, CardContent, CardMedia, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme:Theme) => ({
  card :{
    width:"230px",
    marginTop:"10px"
  }
}))

type Props = {
  name: string;
  description: string;
  image: string;
}

const Product = ({name,description,image} : Props) => {
  const classes = useStyles();
    return(
      <Card className={classes.card} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="product"
              height="140"
              image={image}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
    )
}

export default Product;
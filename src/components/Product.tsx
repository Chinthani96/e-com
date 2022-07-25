import { Box, Button, Card, CardActions, CardContent, CardMedia, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ProductT } from '../shared/types/product';

const useStyles = makeStyles((theme:Theme) => ({
  card :{
    width:"230px",
    marginTop:"10px"
  },
  productDetails:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  }
}))

type Props = {
  product: ProductT;
  productView: Function;
}

const Product = ({product, productView}: Props) => {
  const classes = useStyles();

  const handleProductClick = () : void => {
    productView(product);
  }


    return(
      <Card 
        className={classes.card}
        sx={{ maxWidth: 345 }}
        elevation={5}
        onClick={handleProductClick}
        >
        <Box>
          <CardMedia
                component="img"
                alt="product"
                height="140"
                image="/assets/guitar.jpg"
          />
          <CardContent>
              <div className={classes.productDetails}>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="div"
                  color="#413E5C"
                  >
                    {product.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="#7F5279"
                >
                    
                    ${product.price}
                </Typography>
              </div>
          </CardContent>
        </Box>
    </Card>
    )
}

export default Product;


import { Box, Container, Grid, Paper, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getAllProducts } from "../api/allProductsAPI";
import { ProductT } from "../shared/types/product";

const useStyles = makeStyles((theme:Theme) => ({
    container :{
        height:"80vh",
        marginTop:"30px"
    },
    paper :{
        // height:"100%",
        width:"100%",
    }
}))

// interface Props{
//     product: ProductT;
//     location: Location;
// }

const Details = () => {
    const classes = useStyles();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [product, setProduct] = useState({});
    // const [productId] = useState<string>(queryParams.get("id") || "");
    const price = '$200';

    // useEffect(() => {
    //     getAllProducts().then((response) => {
    //         if(response.error) return;
    //         const products : Array<ProductT> = [];
    //         response.data.forEach((product : ProductT) => {
    //             products.push(product);
    //         })
    //     })
    // })

    useEffect(() => {
        const obj = {...location};
        console.log(obj);
    }, [location])

    return(
        <Box>
            <Container 
                className={classes.container}>
                    <Paper 
                    className={classes.paper} elevation={5}
                    >   
                    Yooooooo!!!!!
                        {/* <Grid 
                            container
                            justifyContent="center"
                            alignItems="center"
                            >
                            <Grid item>
                                {product.image}
                            </Grid>
                            <Grid item>
                                {product.name}
                                {product.descriptions}
                                {price}
                            </Grid>
                            

                        </Grid> */}
                        
                    </Paper>
            </Container>
        </Box>
    )
}

export default Details;
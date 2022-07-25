import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Product from '../../components/Product';
import { getAllProducts } from '../../api/allProductsAPI';
import { useHistory } from 'react-router';
import { PRODUCT } from '../../shared/routes';
import { ProductT } from '../../shared/types/product';

const AllProducts = () => {
    const [data, setData] = useState<Array<ProductT>>([]);
    const history = useHistory();

    useEffect(() => {
        getAllProducts()
        .then((response) => {
            if(response.error) return;
            setData(response.data);
        })
    },[])

    const productView = (product: ProductT) => {
        console.log(product);
        history.push({
            pathname: PRODUCT,
            search: `?id=${product.id}`,
            state: {detail : product }
        })
        console.log(history);
    }

    return(
            <Grid 
                container 
                spacing={2} 
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            >
                {data.map((data) => {
                    return(
                        <Grid 
                            item 
                            xs={12}
                            sm={2}
                            md={3}
                            xl={3}
                            key={data.id}
                            display="flex"
                            justifyContent="center"
                        >
                            <Product 
                                product={data}
                                productView={productView}
                            />   
                        </Grid>
                    )
                })}
            </Grid>
    )
    
}

export default AllProducts;
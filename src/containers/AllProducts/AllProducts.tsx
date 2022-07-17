import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Product from '../../components/Product';
import { getAllProducts } from '../../api/allProductsAPI';

interface Product {
    id: number;
    name: string;
    descriptions: string;
    quantityOnHand: number;
}

const AllProducts = () => {
    const [data, setData] = useState<Array<Product>>([]);
    useEffect(() => {
        getAllProducts()
        .then((response) => {
            if(response.error) return;
            setData(response.data);
        })
    },[])

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
                                name={data.name} 
                                image={"../../public/assets/guitar.jpg"} 
                                description={data.descriptions} 
                            />   
                        </Grid>
                    )
                })}
            </Grid>
    )
    
}

export default AllProducts;
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Product from '../../components/Product';
import { dummyData } from '../testData';
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
        <Grid container spacing={2}>
            {data.map((data) => {
                return(
                    <Grid 
                        item 
                        xs={3}
                        key={data.id}
                    >
                     <Product name={data.name} image={"../../public/assets/guitar.jpg"} description={data.descriptions} />   
                    </Grid>
                )
            })}
        </Grid>
    )
    
}

export default AllProducts;
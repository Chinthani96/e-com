import React from 'react';
import { Grid } from '@mui/material';
import Product from '../../components/Product';
import { dummyData } from '../testData';

const AllProducts = () => {
    return(
        <Grid container spacing={2}>
            {dummyData.map((data) => {
                return(
                    <Grid 
                        item 
                        xs={3}
                        key={data.id}
                    >
                     <Product name={data.name} image={data.image} description={data.description} />   
                    </Grid>
                )
            })}
        </Grid>
    )
    
}

export default AllProducts;
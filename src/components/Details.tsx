import { Box, Container, Grid, Paper, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

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

type Props = {
    name: string;
    description: string;
    image: string;
    price:string;
}

const Details = ({name, description, image, price} : Props) => {
    const classes = useStyles();
    return(
        <Box>
            <Container 
                className={classes.container}>
                    <Paper 
                    className={classes.paper} elevation={5}
                    >   
                        <Grid 
                            container
                            justifyContent="center"
                            alignItems="center"
                            >
                            <Grid item>
                                {image}
                            </Grid>
                            <Grid item>
                                {name}
                                {description}
                                {price}
                            </Grid>
                            

                        </Grid>
                        
                    </Paper>
            </Container>
        </Box>
    )
}

export default Details;
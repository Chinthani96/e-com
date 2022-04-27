import React, { useState } from 'react';
import { Alert, Button, Container,TextField, Theme, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles';
import {PRODUCTS} from '../shared/routes';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        height: "40vh",
        marginTop:"20vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    form: {
        marginTop:"3vh",
        padding:"0 2vw 0 2vw"
    },
    button:{
        marginTop:"10px"
    },
    typo:{
        textAlign:"center",
    },
    txtInput:{
        color:"whitesmoke"
    }
}))

const Auth = () => {
    const isSignedUp = true;
    const history =  useHistory();
    const [name, setName] = useState("123");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    const [valid,setValid] = useState(true)

    const loginHandle = (event:any) => {
        event.preventDefault();
        const username = "test";
        const pwd = "test";
        
        (name===username && password===pwd)? history.push(PRODUCTS) : setValid(false);
    
    }
    
    const signUpHandle = () => {
        history.push(PRODUCTS);
    }


    return(
        <Container className={classes.paper} maxWidth="sm">
            {!valid? <Alert severity="error">Incorrect username or password!</Alert> : ""}
            <Typography className={classes.typo} variant="h5" component="h6" >
                {   isSignedUp? 
                        "LOGIN" : "SIGNUP" 
                }
            </Typography>
            <form className={classes.form}>
                <TextField 
                    margin="normal" 
                    className={classes.txtInput} 
                    required 
                    name="name"
                    id="username" 
                    label="username" 
                    variant="standard" 
                    fullWidth 
                    autoFocus
                    onChange = {(event) => {setName(event.target.value)}}
                    />
                {!isSignedUp ? 
                <TextField 
                    margin="normal" 
                    className={classes.txtInput} 
                    required 
                    name="email"
                    id="email" 
                    label="email" 
                    variant="standard" 
                    fullWidth 
                    autoFocus
                    onChange = {(event) => {setEmail(event.target.value)}}
                    /> : <></>}
                <TextField 
                    margin="normal" 
                    className={classes.txtInput} 
                    required 
                    name="password"
                    id="password" 
                    label="password" 
                    variant="standard" 
                    fullWidth 
                    autoFocus
                    onChange = {(event) => {setPassword(event.target.value)}}
                    />
                {isSignedUp ? 
                <>
                <Button 
                    variant="contained" 
                    className={classes.button} 
                    type="submit" 
                    fullWidth 
                    color="secondary" 
                    onClick={loginHandle}
                    >
                        Login
                </Button> 
                <Typography>Forgot password?</Typography>
                </>
                :
                <Button 
                    variant="contained" 
                    className={classes.button} 
                    type="button" 
                    fullWidth 
                    color="secondary" 
                    onClick={signUpHandle}
                >Sign up</Button>  
                }
            </form>
        </Container>
    )
}

export default Auth;
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AllProducts from '../containers/AllProducts';

const Router  = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={"/products"} component={AllProducts}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Router;
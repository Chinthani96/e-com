import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AllProducts from '../containers/AllProducts';
import Auth from '../containers/Auth';

const Router  = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/products"} component={AllProducts}/>
                <Route exact path={"/login"} component={Auth}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
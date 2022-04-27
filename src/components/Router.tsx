import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AllProducts from '../containers/AllProducts/AllProducts';
import Auth from '../containers/Auth';
import Product from './Product';

const Router  = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"} component={Auth}/>
                <Route exact path={"/products"} component={AllProducts}/>
                <Route exact path={"/product"} component={Product} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
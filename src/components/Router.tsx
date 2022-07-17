import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AllProducts from '../containers/AllProducts/AllProducts';
import Auth from '../containers/Auth';
import Details from './Details';

const Router  = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"} component={Auth}/>
                <Route exact path={"/products"} component={AllProducts}/>
                <Route exact path={"/product"} component={Details} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
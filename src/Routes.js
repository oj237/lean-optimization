import React from 'react';
import { Route, Switch } from "react-router-dom";
import CreerClient from './containers/CreerClient';
import Home from './containers/Home';
import Landing from "./containers/Landing";
import NotFound from './containers/NotFound';
import Product from './containers/Product';
import Rapport from './containers/Rapport';
import Request from './containers/Request';


export default function Routes() {
    return(
        <Switch>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/product">
                <Product />
            </Route>
            <Route path="/rapport">
                <Rapport />
            </Route>
            <Route path="/creer-client">
                <CreerClient />
            </Route>
            <Route path="/request">
                <Request />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}
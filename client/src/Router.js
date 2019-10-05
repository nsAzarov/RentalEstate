import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './Components/Home';
import Apartment from './Components/Apartment';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/Apartment/:id" component={Apartment} />
        </BrowserRouter>
    )
}

export default Router;
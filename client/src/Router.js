import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './Components/Home';
import Apartment from './Components/Apartment';
import ScrollToTop from './Components/Master/ScrollToTop';

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Route path="/" exact component={Home} />
                <Route path="/Apartment/:id" component={Apartment} />
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default Router;
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Item from './Components/Item';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact  component={Item} />
        </BrowserRouter>
    )
}

export default Router;
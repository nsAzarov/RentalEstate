import React, {useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import Top from '../Master/Top';
import Bottom from '../Master/Bottom';
import Signature from '../Master/Signature';

const Apartment = () => {
    return (
        <Fragment>
            <Top />

            <Bottom />
            <Signature />
        </Fragment>
    );
}

export default Apartment;
import React, {useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import Top from '../Master/Top';
import Bottom from '../Master/Bottom';
import Signature from '../Master/Signature';
import Content from './Content';
import Booking from './Booking';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Apartment = () => {
    return (
        <Fragment>
            <Top />

            <Container>
                <Content />
                <Booking />
            </Container>

            <Bottom />
            <Signature />
        </Fragment>
    );
}

export default Apartment;
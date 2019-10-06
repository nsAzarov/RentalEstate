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
    background: whitesmoke;
`;

const Apartment = (props) => {
    return (
        <Fragment>
            <Top />
            
            <Container>
                <Content ID={props.match.params.id}/>
                <Booking />
            </Container>

            <Bottom />
            <Signature />
        </Fragment>
    );
}

export default Apartment;
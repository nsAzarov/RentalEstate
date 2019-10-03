import React from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';

const BookingBlock = styled.div`
    height: 500px;
    width: 25%;
    border: 1px solid black;
    margin: 1%;
    position: sticky;
    top: 0;
`;

function Booking() {
    return (
        <BookingBlock>
            
        </BookingBlock>
    )
}

export default Booking;
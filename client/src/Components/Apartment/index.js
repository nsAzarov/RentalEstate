import React, {useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import Top from '../Master/Top';
import Bottom from '../Master/Bottom';
import Signature from '../Master/Signature';
import Content from './Content';
import Booking from './Booking';
import APIservice from '../../services/APIservice';
import {device} from '../../services/device';

const Container = styled.div`
    @media ${device.mobileS} {
        display: inline-block;
    }
    @media ${device.laptopL} {
        display: flex;
        justify-content: center;
    }
    @media ${device.desktop} {
        display: flex;
        justify-content: center;
    }
    width: 100%;
    background: whitesmoke;
`;

const Apartment = (props) => {
    const [apartment, setApartment] = useState({})
    const [images, setImages] = useState(['0/i1.jpg', '0/i2.jpg', '0/i3.jpg'])
    useEffect(() => {
        const ApartmentsAPIservice = new APIservice();
        ApartmentsAPIservice
            .getApartment(props.match.params.id)
            .then(data => {setApartment(data); setImages(data.images)});
    }, [props.match.params.id])
    return (
        <Fragment>
            <Top />
            
            <Container>
                <Content images={images} apartment={apartment}/>
                <Booking pricePerNight={apartment.price} maxGuests={apartment.guests}/>
            </Container>

            <Bottom />
            <Signature />
        </Fragment>
    );
}

export default Apartment;
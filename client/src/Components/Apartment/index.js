import React, {useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import Top from '../Master/Top';
import Bottom from '../Master/Bottom';
import Signature from '../Master/Signature';
import Content from './Content';
import Booking from './Booking';
import APIservice from '../../services/APIservice';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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
    }, [])
    return (
        <Fragment>
            <Top />
            
            <Container>
                <Content images={images} apartment={apartment}/>
                <Booking pricePerNight={apartment.price}/>
            </Container>

            <Bottom />
            <Signature />
        </Fragment>
    );
}

export default Apartment;
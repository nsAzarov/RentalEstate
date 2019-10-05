import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';
import ImagesSection from './ImagesSection';
import OverviewSection from './OverviewSection';
import APIservice from '../../services/APIservice';

const ContentBlock = styled.div`
    width: 60%;
    border: 1px solid black;
    margin: 1%;
`;

function Content(props) {
    const [apartment, setApartment] = useState({})
    useEffect(() => {
        const ApartmentsAPIservice = new APIservice();
        ApartmentsAPIservice
            .getApartment(props.ID)
            .then(data => setApartment(data));
    }, [])
    return (
        <ContentBlock>
            {console.log(apartment)}
            <ImagesSection />
            <OverviewSection />
        </ContentBlock>
    )
}

export default Content;
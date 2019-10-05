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
    const [apartment, setApartment] = useState({heading: "", description: ""})
    const [images, setImages] = useState(['14/i1.jpg', '14/i2.jpg', '14/i3.jpg'])
    useEffect(() => {
        const ApartmentsAPIservice = new APIservice();
        ApartmentsAPIservice
            .getApartment(props.ID)
            .then(data => {setApartment(data); setImages(data.images)});
    }, [])
    return (
        <ContentBlock>
            <ImagesSection Images={images}/>
            <OverviewSection Info={apartment}/>
        </ContentBlock>
    )
}

export default Content;
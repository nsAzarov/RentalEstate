import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';
import ImagesSection from './ImagesSection';
import OverviewSection from './OverviewSection';
import APIservice from '../../services/APIservice';

const ContentBlock = styled.div`
    width: 60%;
    margin: 1%;
`;

function Content(props) {
    return (
        <ContentBlock>
            <ImagesSection Images={props.images}/>
            <OverviewSection Info={props.apartment}/>
        </ContentBlock>
    )
}

export default Content;
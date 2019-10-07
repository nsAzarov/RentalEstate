import React from 'react';
import styled from 'styled-components';
import ImagesSection from './ImagesSection';
import OverviewSection from './OverviewSection';
import {device} from '../../services/device';

const ContentBlock = styled.div`
    @media ${device.mobileS} {
        width: 100%;
    }
    @media ${device.tablet} {
        width: 86%;
        margin: 0 7%;
    }
    @media ${device.laptop} {
        width: 80%;
        margin: 0 10%;
    }
    @media ${device.laptopL} {
        width: 65%;
        margin: 1% 1% 1% 5%;
    }
    @media ${device.desktop} {
        width: 60%;
        margin: 1% 1% 1% 10%;
    }
    @media ${device.desktopL} {
        width: 53%;
        margin: 1% 1% 1% 15%;
    }
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
import React from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';
import ImagesSection from './ImagesSection';
import OverviewSection from './OverviewSection';

const ContentBlock = styled.div`
    width: 60%;
    border: 1px solid black;
    margin: 1%;
`;

function Content() {
    return (
        <ContentBlock>
            <ImagesSection />
            <OverviewSection />
        </ContentBlock>
    )
}

export default Content;
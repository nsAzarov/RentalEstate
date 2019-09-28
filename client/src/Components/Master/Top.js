import React from 'react';
import styled from 'styled-components';

const TopSection = styled.div`
    height: 400px;
    width: 100%;
    background: grey;
`;

const Header = styled.div`
    height: 90px;
    width: 100%;
    background: white;
`;

const Top = () => {
    return(
        <TopSection>
            <Header></Header>
        </TopSection>
    );
}

export default Top;
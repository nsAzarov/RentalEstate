import React from 'react';
import styled from 'styled-components';

const SignatureSection = styled.div`
    height: 50px;
    width: 100%;
    background: #323840;
    center {
        padding: 16px;
        color: black;
    }
`;

const Signature = () => {
    return(
        <SignatureSection>
            <center>© 2019 RentalEstate Pty Ltd. ALL RIGHTS RESERVED https://github.com/nsAzarov/RentalEstate</center>
        </SignatureSection>
    );
}

export default Signature;
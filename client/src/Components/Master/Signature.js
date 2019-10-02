import React from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';

const SignatureSection = styled.div`
    @media ${device.mobileS} {
        center {
            padding: 4px;
            color: black;
            font-size: 9px;
        }
    }
    @media ${device.mobileL} {
        center {
            padding: 4px;
            color: black;
            font-size: 9px;
        }
    }
    @media ${device.tablet} {
        center {
            padding: 8px;
            color: black;
            font-size: 12px;
        }
    }
    @media ${device.laptop} {
        center {
            padding: 12px;
            font-size: 14px;
        }
    }
    width: 100%;
    background: #323840;
`;

const Signature = () => {
    return(
        <SignatureSection>
            <center>© 2019 RentalEstate Pty Ltd. ALL RIGHTS RESERVED https://github.com/nsAzarov/RentalEstate</center>
        </SignatureSection>
    );
}

export default Signature;
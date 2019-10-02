import React from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';

const MenuContent = styled.div`
    @media ${device.mobileS} {
        width: 98.2%;
		margin: 0.9% 0.9% 0 0.9%;
		height: 50px;
	}
    @media ${device.laptop} {
        width: 23.8%;
        margin: 0.6%;
        height: 280px;
    }
    @media ${device.laptopL} {
        height: 380px;
	}
    @media ${device.desktop} {
        width: 19.2%;
		margin: 0.4%;
    }
    @media ${device.desktopL} {
        height: 410px;
	}
    background: wheat;
`;

const Menu = () => {
    return (
        <MenuContent>

        </MenuContent>
    );
}

export default Menu;
import React from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';

const MenuContent = styled.div`
    height: 380px;
    @media ${device.tablet} {
        width: 23.8%;
		margin: 0.6%;
		height: 280px;
	}
    @media ${device.laptop} {
        width: 23.8%;
        margin: 0.6%;
        height: 280px;
    }
    @media ${device.laptopL} {
        width: 23.8%;
        margin: 0.6%;
        height: 380px;
	}
    @media ${device.desktop} {
        width: 23.8%;
		margin: 0.6%;
	}
	@media ${device.desktopL} {
        width: 19.2%;
		margin: 0.4%;
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
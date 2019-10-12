import React from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';
import ad from '../../png/ad.jpg';

const AdContent = styled.div`
    @media ${device.mobileS} {
        display: none;
	}
    @media ${device.laptop} {
        display: inline-block;
        width: 23.8%;
        margin: 0.6%;
        height: 280px;
    }
    @media ${device.laptopL} {
        height: 410px;
	}
    @media ${device.desktopL} {
        width: 19.2%;
		margin: 0.4%;
    }
    background: url(${props => props.ad}) no-repeat;
    background-size: cover;
    position: relative;
    cursor: pointer;
    #text {
        @media ${device.laptop} {
            line-height: 30px;
            font-size: 36px;
        }
        @media ${device.laptopL} {
            line-height: 38px;
            font-size: 45px;
        }
        font-family: 'Indie Flower', cursive;
        font-weight: bold;
        text-align: right;
        position: absolute;
        user-select: none;
        top: 10px;
        right: 10px;
    }
`;

const Ad = () => {
    return (
        <AdContent ad={ad}>
            <div id="text">Your<br />advertisement<br />could be<br />here</div>
        </AdContent>
    );
}

export default Ad;
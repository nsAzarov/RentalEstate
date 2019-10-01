import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {device} from '../../services/device';

const Header = styled.div`
    width: 100%;
    background: white;
    display: flex;
    align-content: center;
    @media ${device.tablet} {
        a {
            padding: 22px 10px;
            text-decoration: none;
            color: #72777F;
            font-size: 14px;
        }
    }
    @media ${device.laptop} {
        a {
            padding: 22px 10px;
            text-decoration: none;
            color: #72777F;
            font-size: 14px;
        }
    }
    @media ${device.laptopL} {
        a {
            padding: 30px 16px;
            text-decoration: none;
            color: #72777F;
            font-size: 17px;
        }
    }
    @media ${device.laptopL} {
        a {
            padding: 30px 30px;
        }
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    @media ${device.tablet} {
        margin-right: 30px;
        img {
            height: 40px;
        }
        h1 {
            font-size: 36px;
            color: #323840;
            font-family: 'Josefin Sans', sans-serif;
        }
    }
    @media ${device.laptop} {
        margin-right: 30px;
        img {
            height: 40px;
        }
        h1 {
            font-size: 36px;
            color: #323840;
            font-family: 'Josefin Sans', sans-serif;
        }
    }
    @media ${device.laptopL} {
        margin-right: 50px;
        img {
            height: 48px;
        }
        h1 {
            font-size: 42px;
        }
    }
    @media ${device.desktopL} {
        margin-right: 150px;
    }
`;

const Top = () => {
    return(
        <Header>
            <Logo>
                <img src={require('../../png/key.png')} alt=""/>
                <h1>Rental Estate</h1>
            </Logo>
            <Link to='/'>Sale Properties</Link>
            <Link to='/'>Rentals</Link>
            <Link to='/'>Vacation Properties</Link>
            <Link to='/'>Luxury Apartments</Link>
            <Link to='/'>Agencies</Link>
        </Header>
    );
}

export default Top;
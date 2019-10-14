import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {device} from '../../services/device';

const Header = styled.div`
    width: 100%;
    background: white;
    display: flex;
    align-content: center;
    @media ${device.mobileS} {
        a {
            padding: 8px 8px;
            text-decoration: none;
            color: #72777F;
            font-size: 9px;
            transition: .3s;
            &:hover {
                background: whitesmoke;
            }
        }
        a:last-child {
            display: none;
        }
    }
    @media ${device.mobileL} {
        a {
            padding: 14px 8px;
            font-size: 10px;
        }
    }
    @media ${device.tablet} {
        a {
            padding: 20px 10px;
            font-size: 12px;
        }
        a:last-child {
            display: inline-block;
        }
    }
    @media ${device.laptop} {
        a {
            padding: 22px 10px;
            font-size: 14px;
        }
    }
    @media ${device.laptopL} {
        a {
            padding: 30px 16px;
            font-size: 17px;
        }
    }
    @media ${device.laptopL} {
        a {
            padding: 30px 30px;
        }
    }
`;

const Logo = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    @media ${device.mobileS} {
        padding: 0 !important;
        margin-right: 4px;
        width: 85px;
        img {
            height: 26px;
        }
        h1 {
            font-size: 18px;
            color: #323840;
            font-family: 'Josefin Sans', sans-serif;
        }
        &:hover {
            background: none !important;
        }
    }
    @media ${device.mobileL} {
        h1 {
            font-size: 20px;
        }
    }
    @media ${device.tablet} {
        margin-right: 50px;
        width: 125px;
        img {
            height: 40px;
        }
        h1 {
            font-size: 28px;
        }
    }
    @media ${device.laptop} {
        margin-right: 30px;
        width: 270px;
        h1 {
            font-size: 36px;
        }
    }
    @media ${device.laptopL} {
        margin-right: 50px;
        width: 310px;
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
            <Logo to='/'>
                <img src={require('../../png/key.png')} alt=""/>
                <h1>Rental Estate</h1>
            </Logo>
            <Link to='/'>Sale Properties</Link>
            <Link to='/'>Israeli Rentals</Link>
            <Link to='/'>Vacation Properties</Link>
            <Link to='/'>Luxury Apartments</Link>
            <Link to='/'>Agencies</Link>
        </Header>
    );
}

export default Top;
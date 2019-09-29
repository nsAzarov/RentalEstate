import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    background: white;
    display: flex;
    align-content: center;
    a {
        padding: 30px 16px;
        text-decoration: none;
        color: #72777F;
        font-size: 17px;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
    cursor: pointer;
    img {
        height: 48px;
    }
    h1 {
        color: #323840;
        font-size: 42px;
        font-family: 'Josefin Sans', sans-serif;
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
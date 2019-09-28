import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const TopSection = styled.div`
    height: 400px;
    width: 100%;
    background: grey;
`;

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
        <TopSection>
            <Header>
                <Logo>
                    <img src={require('../../png/key.png')} alt=""/>
                    <h1>Rental Estate</h1>
                </Logo>
                <Link>Sale Properties</Link>
                <Link>Rentals</Link>
                <Link>Vacation Properties</Link>
                <Link>Luxury Apartments</Link>
                <Link>Agencies</Link>
            </Header>
        </TopSection>
    );
}

export default Top;
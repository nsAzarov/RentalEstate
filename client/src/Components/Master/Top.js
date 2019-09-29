import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import landscape from '../../png/landscape.jpg'

const TopSection = styled.div`
    height: 500px;
    width: 100%;
    background: url(${landscape});
    background-size: cover;
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

const Form = styled.form`
    height: 80px;
    width: 1000px;
    background: whitesmoke;
    margin: auto;
    margin-top: 290px;
    border-radius: 5px;
    display: flex;
    position: relative;
    .dropdown {
        margin: 15px 0 0 20px;
        height: 16px;
        width: 150px;
        border: 1px solid black;
        border-radius: 3px;
        padding: 16px;
        cursor: pointer;
        .dropdown-menu {
            margin: 30px;
            margin-left: 0;
            padding-left: 0;
            display: none;
            li {
                height: 16px;
                width: 150px;
                background: whitesmoke;
                list-style-type: none;
            }
        }
    }
    button {
        position: absolute;
        right: 0;
        height: 80px;
        width: 100px;
        font-size: 16px;
        background: #b3b3b3;
        border: none;
        border-radius: 3px;
        transition: .2s;
        &:hover {
            background: #3C90BE;
        }
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
                <Link to='/'>Sale Properties</Link>
                <Link to='/'>Rentals</Link>
                <Link to='/'>Vacation Properties</Link>
                <Link to='/'>Luxury Apartments</Link>
                <Link to='/'>Agencies</Link>
            </Header>
            <Form>
                <div className="dropdown form-control">
                    <div data-toggle="dropdown" className="filter-menu-item" id="actions" value="all-actions">All Actions</div>
                    <ul className="dropdown-menu" id="dropdown-actions">
                        <li>All Actions</li>
                        <li>Properties Sale</li>
                        <li>Israel Rentals</li>
                        <li>Luxary Apartments</li>
                        <li>New Projects</li>
                    </ul>
                </div>
                <div className="dropdown form-control">
                    <div data-toggle="dropdown" className="filter-menu-item" id="types" value="all-types">All Types</div>
                    <ul className="dropdown-menu" id="dropdown-types">
                        <li>All Actions</li>
                        <li>Properties Sale</li>
                        <li>Israel Rentals</li>
                        <li>Luxary Apartments</li>
                        <li>New Projects</li>
                    </ul>
                </div>
                <div className="dropdown form-control">
                    <div data-toggle="dropdown" className="filter-menu-item" id="cities" value="all-cities">Select City</div>
                    <ul className="dropdown-menu" id="dropdown-cites">
                        <li>All Actions</li>
                        <li>Properties Sale</li>
                        <li>Israel Rentals</li>
                        <li>Luxary Apartments</li>
                        <li>New Projects</li>
                    </ul>
                </div>
                <button type="submit">Search</button>
            </Form>
        </TopSection>
    );
}

export default Top;
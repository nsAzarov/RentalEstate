import React from 'react';
import styled from 'styled-components';
import landscape from '../../png/landscape.jpg'
import {device} from '../../services/device'

const SearchSection = styled.div`
    @media ${device.tablet} {
        height: 220px;
    }
    @media ${device.laptop} {
        height: 280px;
    }
    @media ${device.laptopL} {
        height: 380px;
    }
    @media ${device.desktop} {
        height: 480px;
    }
    @media ${device.desktopL} {
        height: 530px;
    }
    height: 420px;
    width: 100%;
    background: url(${landscape});
    background-size: cover;
    position: relative;
`;

const Form = styled.form`
    height: 80px;
    width: 1000px;
    @media ${device.tablet} {
        width: 700px;
        left: 50%;
        margin-left: -350px;
        height: 48px;
        top: 150px;
    }
    @media ${device.laptop} {
        width: 1000px;
        left: 50%;
        margin-left: -500px;
        height: 58px;
        top: 200px;
    }
    @media ${device.laptopL} {
        top: 270px;
    }
    @media ${device.desktop} {
        top: 350px;
        height: 80px;
    }
    @media ${device.desktopL} {
        width: 1200px;
        margin-left: -600px;
        top: 390px;
    }
    background: whitesmoke;
    margin: auto;
    border-radius: 5px;
    display: flex;
    position: absolute;
    .dropdown {
        @media ${device.tablet} {
            margin: 8px 0 0 12px;
            padding: 8px;
            font-size: 12px;
            height: 14px;
            width: 120px;
        }
        @media ${device.laptop} {
            margin: 10px 0 0 15px;
            padding: 10px;
            font-size: 14px;
            height: 16px;
            width: 150px;
        }
        @media ${device.laptopL} {
            margin: 10px 0 0 15px;
            padding: 10px;
            font-size: 14px;
        }
        @media ${device.desktop} {
            margin: 15px 0 0 20px;
            padding: 16px;
            font-size: 16px;
        }
        width: 150px;
        border: 1px solid black;
        border-radius: 3px;
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
        @media ${device.tablet} {
            font-size: 12px;
            height: 48px;
            width: 60px;
        }
        @media ${device.laptop} {
            font-size: 14px;
            height: 58px;
            width: 80px;
        }
        @media ${device.laptopL} {
            font-size: 14px;
            height: 58px;
            width: 80px;
        }
        @media ${device.desktop} {
            font-size: 16px;
            height: 80px;
            width: 100px;
        }
        margin-left: auto;
        right: 0;
        background: #b3b3b3;
        border: none;
        border-radius: 3px;
        transition: .2s;
        &:hover {
            background: #3C90BE;
        }
    }
`;

const Search = () => {
    return(
        <SearchSection>
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
        </SearchSection>
    );
}

export default Search;
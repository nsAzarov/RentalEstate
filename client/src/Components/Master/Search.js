import React from 'react';
import styled from 'styled-components';
import landscape from '../../png/landscape.jpg'
import {device} from '../../services/device'

const SearchSection = styled.div`
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
    }
    @media ${device.laptop} {
        width: 1000px;
        left: 50%;
        margin-left: -500px;
	}
    background: whitesmoke;
    margin: auto;
    border-radius: 5px;
    display: flex;
    position: absolute;
    top: 290px;
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
        margin-left: auto;
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
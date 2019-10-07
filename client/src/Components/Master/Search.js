import React, {useState} from 'react';
import styled from 'styled-components';
import landscape from '../../png/landscape.jpg'
import {device} from '../../services/device'

const SearchSection = styled.div`
    @media ${device.mobileS} {
        height: 135px;
    }
    @media ${device.mobileL} {
        height: 150px;
    }
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
    width: 100%;
    background: url(${landscape});
    background-size: cover;
    position: relative;
`;

const Form = styled.form`
    @media ${device.mobileS} {
        width: 300px;
        left: 50%;
        margin-left: -150px;
        height: 37px;
        top: 85px;
    }
    @media ${device.mobileL} {
        width: 400px;
        margin-left: -200px;
        top: 100px;
    }
    @media ${device.tablet} {
        width: 700px;
        margin-left: -350px;
        height: 48px;
        top: 150px;
    }
    @media ${device.laptop} {
        width: 1000px;
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
        @media ${device.mobileS} {
            margin: 5px 0 0 5px;
            padding: 8px;
            font-size: 8px;
            height: 9px;
            width: 59px;
        }
        @media ${device.mobileL} {
            font-size: 10px;
            height: 10px;
            width: 91px;
        }
        @media ${device.tablet} {
            margin: 8px 0 0 12px;
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
        @media ${device.desktop} {
            margin: 15px 0 0 20px;
            padding: 16px;
            font-size: 16px;
        }
        width: 150px;
        border: 1px solid black;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        ul {
            @media ${device.mobileS} {
                top: 27px;
                li {
                    padding: 5px;
                    width: 64px;
                }
            }
            @media ${device.mobileL} {
                li {
                    width: 96px;
                }
            }
            @media ${device.tablet} {
                top: 32px;
                li {
                    padding: 8px;
                    width: 120px;
                }
            }
            @media ${device.laptop} {
                top: 37px;
                li {
                    padding: 10px;
                    width: 150px;
                }
            }
            @media ${device.desktop} {
                top: 50px;
                li {
                    padding: 16px;
                }
            }
            position: absolute;
            left: 0px;
            z-index: 10;
            li {
                background: whitesmoke;
                list-style-type: none;
                transition: 0.3s;
                &:hover {
                    background: #3C90BE;
                }
            }
        }
    }
    button {
        @media ${device.mobileS} {
            font-size: 10px;
            height: 37px;
            width: 50px;
        }
        @media ${device.mobileL} {
            font-size: 11px;
            width: 54px;
        }
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
            color: white;
        }
    }
`;

const Search = () => {
    const [actionsOpen, setActionsOpen] = useState(false);
    const [typesOpen, setTypesOpen] = useState(false);
    const [citiesOpen, setCitiesOpen] = useState(false);

    const [action, setAction] = useState("All Actions");
    const [type, setType] = useState("All Types");
    const [city, setCity] = useState("All Cities");
    return(
        <SearchSection>
            <Form>
                <div className="dropdown form-control" onClick={() => {setTypesOpen(false);setCitiesOpen(false);setActionsOpen(!actionsOpen)}}>
                    <div className="filter-menu-item">{action}</div>
                    {actionsOpen ?
                        <ul>
                            <li onClick={() => {setAction("All Actions")}}>All Actions</li>
                            <li onClick={() => {setAction("Rent Apartment")}}>Rent Apartment</li>
                            <li onClick={() => {setAction("Book Hotel")}}>Book Hotel</li>
                            <li onClick={() => {setAction("Buy Property")}}>Buy Property</li>
                        </ul>
                        :
                        null
                    }
                </div>
                <div className="dropdown form-control" onClick={() => {setActionsOpen(false);setCitiesOpen(false);setTypesOpen(!typesOpen)}}>
                    <div className="filter-menu-item">{type}</div>
                    {typesOpen ?
                        <ul>
                            <li onClick={() => {setType("All Types")}}>All Types</li>
                            {action==="Rent Apartment" ?
                            <>
                            <li onClick={() => {setType("Luxary Apartments")}}>Luxary Apartments</li>
                            <li onClick={() => {setType("Villa")}}>Villa</li>
                            </>
                            :
                            null
                            }
                            {action==="Book Hotel" ?
                            <li onClick={() => {setType("Luxary Hotels")}}>Luxary Hotels</li>
                            :
                            null
                            }
                            {action==="Buy Property" ?
                            <li onClick={() => {setType("New Projects")}}>New Projects</li>
                            :
                            null
                            }
                        </ul>
                        :
                        null
                    }
                </div>
                <div className="dropdown form-control" onClick={() => {setActionsOpen(false);setTypesOpen(false);setCitiesOpen(!citiesOpen)}}>
                    <div className="filter-menu-item">{city}</div>
                    {citiesOpen ?
                        <ul>
                            <li onClick={() => {setCity("All Cities")}}>All Cities</li>
                            <li onClick={() => {setCity("Tel Aviv")}}>Tel Aviv</li>
                            <li onClick={() => {setCity("Jerusalem")}}>Jerusalem</li>
                            <li onClick={() => {setCity("Herzliya")}}>Herzliya</li>
                            <li onClick={() => {setCity("Safed")}}>Safed</li>
                            <li onClick={() => {setCity("Tiberias")}}>Tiberias</li>
                        </ul>
                        :
                        null
                    }
                </div>
                <button type="submit">Search</button>
            </Form>
        </SearchSection>
    );
}

export default Search;
import React, {useState} from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import landscape from '../../png/landscape.jpg';
import {device} from '../../services/device';
import 'react-input-range/lib/css/index.css';

const SearchSection = styled.div`
    @media ${device.mobileS} {
        height: 120px;
    }
    @media ${device.tablet} {
        height: 200px;
    }
    @media ${device.laptop} {
        height: 260px;
    }
    @media ${device.laptopL} {
        height: 350px;
    }
    @media ${device.desktop} {
        height: 440px;
    }
    width: 100%;
    background: url(${landscape});
    background-size: cover;
    position: relative;
`;

const Form = styled.form`
    @media ${device.mobileS} {
        top: 60px;
        width: 96%;
        margin: 0 2%;
    }
    @media ${device.tablet} {
        top: 140px;
        width: 90%;
        margin: 0 5%;
        display: flex;
        align-items: center;
    }
    @media ${device.laptop} {
        top: 180px;
        width: 80%;
        margin: 0 10%;
    }
    @media ${device.laptopL} {
        top: 250px;
        width: 70%;
        margin: 0 15%;
    }
    @media ${device.desktop} {
        top: 340px;
        width: 60%;
        margin: 0 20%;
    }
    background: white;
    position: absolute;
    border-radius: 2px;
    #topSideForm {
        @media ${device.mobileS} {
            width: 100%;
        }
        @media ${device.tablet} {
            width: 60%;
        }
        display: flex;
        align-items: center;
        .dropdown {
            @media ${device.mobileS} {
                width: 80px;
                .menuItem {
                    padding: 5px;
                    font-size: 12px;
                }
                ul {
                    li {
                        padding: 5px;
                        width: 70px;
                        font-size: 12px;
                    }
                }
            }
            @media ${device.laptopL} {
                width: 150px;
                .menuItem {
                    padding: 10px;
                    font-size: 16px;
                }
                ul {
                    li {
                        padding: 10px;
                        width: 130px;
                        font-size: 16px;
                    }
                }
            }
            height: 80%;
            margin-left: 2%;
            .menuItem {
                border: 1px solid black;
                border-radius: 2px;
            }
            ul {
                position: absolute;
                z-index: 100;
                li {
                    list-style-type: none;
                    background: white;
                    transition: .3s;
                    &:hover {
                        background: #3C90BE;
                    }
                }
            }
        }
        #rangeBlock {
            width: 45%;
            @media ${device.mobileS} {
                margin: 4px 5%;
                .input-range {
                    margin-top: 13px;
                }
                .input-range__label--value {
                    top: -23px;
                }
                .input-range__label--min,
                .input-range__label--max {
                    bottom: 13px;
                    position: absolute;
                }
            }
            @media ${device.tablet} {
                .input-range {
                    margin-top: 20px;
                }
                .input-range__label--value {
                    top: -1.8rem;
                }
                .input-range__label--min,
                .input-range__label--max {
                    bottom: 20px;
                    position: absolute;
                }
            }
            @media ${device.laptop} {
                margin: 6px 5%;
            }
            @media ${device.laptopL} {
                margin: 10px 5%;
            }
            @media ${device.desktop} {
                margin: 14px 5%;
            }
        }
    }
    #sortPanel {
        display: flex;
        align-items: center;
        justify-content: center;
        .sortingOption {
            @media ${device.mobileS} {
                margin-right: 8px;
                font-size: 14px;
                img {
                    margin-left: 4px;
                    height: 14px;
                }
            }
            @media ${device.laptopL} {
                margin-right: 10px;
                img {
                    margin-left: 5px;
                    height: 16px;
                }
            }
            display: flex;
            align-items: center;
            margin-right: 10px;
            img {
                margin-left: 5px;
                height: 16px;
            }
        }
    }
    #submit {
        @media ${device.mobileS} {
            font-size: 12px;
            width: 18%;
        }
        @media ${device.tablet} {
            font-size: 14px;
            width: 10%;
        }
        @media ${device.laptopL} {
            font-size: 16px;
        }
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 10%;
        background: grey;
        border-radius: 2px;
    }
`;

const Search = () => {
    const [rangeValue, setRangeValue] = useState({ min: 2, max: 10 });
    const [citiesOpen, setCitiesOpen] = useState(false);
    const [city, setCity] = useState("All Cities");
    return(
        <SearchSection>
            <Form>
                <div id="topSideForm">
                    <div className="dropdown" onClick={() => {setCitiesOpen(!citiesOpen)}}>
                        <div className="menuItem">{city}</div>
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
                    <div id="rangeBlock">
                        <InputRange
                            maxValue={20}
                            minValue={0}
                            value={rangeValue}
                            onChange={value =>  setRangeValue(value) } />
                    </div>
                </div> 
                <button id="submit" type="submit">Search</button>
                <div id="sortPanel">
                    <div className="sortingOption">
                        Price<img src={require('../../png/arrow-bottom.png')}/>
                    </div>
                    <div className="sortingOption">
                        Guests<img src={require('../../png/arrow-bottom.png')}/>
                    </div>
                    <div className="sortingOption">
                        City<img src={require('../../png/arrow-bottom.png')}/>
                    </div>
                </div>
            </Form>
        </SearchSection>
    );
}

export default Search;
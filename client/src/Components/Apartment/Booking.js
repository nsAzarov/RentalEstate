import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

const BookingBlock = styled.div`
    @media ${device.mobileS} {
        width: 100%;
        display: inline-block;
    }
    @media ${device.tablet} {
        width: 60%;
        margin: 0 20%;
    }
    @media ${device.laptopL} {
        height: 295px;
        width: 23%;
        margin: 1% 5% 1% 1%;
        position: sticky;
        top: 0;
    }
    @media ${device.desktop} {
        width: 20%;
        margin: 1% 10% 1% 1%;
    }
`;

const Inputs = styled.div`
    @media ${device.mobileS} {
        height: 130px;
    }
    @media ${device.tablet} {
        height: 140px;
    }
    @media ${device.laptop} {
        height: 150px;
    }
    @media ${device.laptopL} {
        height: 130px;
    }
    width: 100%;
    .date {
        display: inline-block;
        height: 50px;
        width: 44%;
        margin: 2% 3%;
        background: white;
        img {
            height: 30px;
            margin: 10px;
        }
        .react-datepicker-wrapper {
            input {
                position: absolute;
                top: -50px;
                @media ${device.mobileS} {
                    width: 90px;
                }
                @media ${device.tablet} {
                    width: 120px;
                }
                @media ${device.desktop} {
                    width: 110px;
                }
                border: none;
                background: none;
                font-size: 16px;
                height: 55px;
                cursor: pointer;
            }
        }
    }
    #guests {
        height: 50px;
        width: 94%;
        margin: 1% 3%;
        background: white;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        #guestsLogo {
            height: 30px;
            margin: 10px;
        }
        .arrowImg {
            height: 20px;
            margin: 15px;
        }
        position: relative;
        #overGuestsBlock {
            position: absolute;
            top: 0;
            height: 50px;
            width: 100%;
        }
        #guestsForm {
            position: absolute;
            top: 50px;
            height: 100px;
            width: 100%;
            background: rgb(255,255,255);
            background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(217,217,217,1) 100%);
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            .guestsInput {
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                .guestsInputForm {
                    height: 40px;
                    button {
                        height: 40px;
                        width: 40px;
                        border: 1px solid grey;
                        border-radius: 2px;
                    }
                    .guestsType {
                        display: inline-block;
                        padding: 0 10px;
                        cursor: default;
                    }
                }
            }
        }
    }
`;

const Prices = styled.div`
    @media ${device.laptopL} {
        height: 160px;
    }
    width: 100%;
    background: white;
    .prices {
        width: 80%;
        @media ${device.mobileS} {
            padding: 3% 5%;
        }
        @media ${device.tablet} {
            padding: 2.5% 5%;
        }
        @media ${device.laptopL} {
            padding: 3% 5%;
        }
        margin: 0 5%;
        border-bottom: 1px solid #d9d9d9;
        white-space: pre-wrap;
    }
`;

const BookingButton = styled.button`
    width: 90%;
    margin: 5%;
    padding: 3% 5%;
    background: wheat;
    transition: .3s;
    &:hover {
        background: #f0cb86;
    }
`;

function Booking(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(addDays(new Date(), 1));
    const [total, setTotal] = useState(props.pricePerNight);
    const [nights, setNights] = useState(1);
    const [guestsAdult, setGuestsAdult] = useState(1);
    const [guestsChildren, setGuestsChildren] = useState(0);
    const [guestsFormOpened, setGuestsFormOpened] = useState(false);

    useEffect(() => {
        setNights(Math.ceil(Math.abs(endDate - startDate) / (1000*60*60*24)));
        setTotal(nights * props.pricePerNight);
    }, [startDate, endDate, nights, props.pricePerNight])

    const increaseAdultGuests = () => {
        if(guestsAdult + guestsChildren < props.maxGuests) {
            setGuestsAdult(guestsAdult + 1);
        }
    }
    const decreaseAdultGuests = () => {
        if(guestsAdult > 0) {
            setGuestsAdult(guestsAdult - 1);
        }
    }
    const increaseChildrenGuests = () => {
        if(guestsAdult + guestsChildren < props.maxGuests) {
            setGuestsChildren(guestsChildren + 1);
        }
    }
    const decreaseChildrenGuests = () => {
        if(guestsChildren > 0) {
            setGuestsChildren(guestsChildren - 1);
        }
    }

    return (
        <BookingBlock>
            <Inputs>
                <div className="date" id="in">
                    <img src={require('../../png/calendar.png')} alt="date"/>
                    <DatePicker
                        showPopperArrow={false}
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 20)}
                    />
                </div>
                <div className="date" id="out">
                    <img src={require('../../png/calendar.png')} alt="date"/>
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        endDate={endDate}
                        minDate={addDays(startDate, 1)}
                        maxDate={addDays(new Date(), 20)}
                    />
                </div>
                <div id="guests">
                    <div id="overGuestsBlock" onClick={() => {setGuestsFormOpened(!guestsFormOpened)}}></div>
                    <img id="guestsLogo" src={require('../../png/group.png')} alt="guests"/>
                    <div className="guestsNumber">Adult: {guestsAdult}</div>
                    {guestsChildren ? <div className="guestsNumber">Children: {guestsChildren}</div> : null}
                    {guestsFormOpened ?
                        <>
                        <img className="arrowImg" src={require('../../png/arrow-up.png')} alt="close"/>
                        <div id="guestsForm">
                            <div className="guestsInput">
                                <div className="guestsInputForm">
                                    <button onClick={() => {decreaseAdultGuests()}}>-</button>
                                    <div className="guestsType">Adult</div>
                                    <button onClick={() => {increaseAdultGuests()}}>+</button>
                                </div>
                            </div>
                            <div className="guestsInput">
                                <div className="guestsInputForm">
                                    <button onClick={() => {decreaseChildrenGuests()}}>-</button>
                                    <div className="guestsType">Child</div>
                                    <button onClick={() => {increaseChildrenGuests()}}>+</button>
                                </div>
                            </div>
                        </div>
                        </>
                        :
                        <img className="arrowImg" src={require('../../png/arrow-bottom.png')} alt="open"/>
                    }
                </div>
            </Inputs>
            <Prices>
                <div className="prices">Price per night: {props.pricePerNight} &#8362;      Nights: {nights}</div>
                <div className="prices"><b>Total</b>: {total ? total : props.pricePerNight} &#8362;</div>
                <BookingButton>Book Now</BookingButton>
            </Prices>
        </BookingBlock>
    )
}

export default Booking;
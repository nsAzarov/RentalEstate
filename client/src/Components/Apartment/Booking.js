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
        display: inline-block;
    }
    @media ${device.laptopL} {
        display: inline-block;
        height: 295px;
        width: 23%;
        margin: 1% 5% 1% 1%;
        position: sticky;
        top: 0;
    }
    @media ${device.desktop} {
        display: inline-block;
        height: 295px;
        width: 15%;
        margin: 1% 15% 1% 1%;
        position: sticky;
        top: 0;
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
        img {
            height: 30px;
            margin: 10px;
        }
        img:last-child {
            height: 20px;
            margin: 15px;
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
    useEffect(() => {
        setNights(endDate.getDay() - startDate.getDay())
        setTotal(nights * props.pricePerNight);
    }, [startDate, endDate, nights, props.pricePerNight])
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
                    <img src={require('../../png/group.png')} alt="guests"/>
                    <img src={require('../../png/arrow-bottom.png')} alt="open"/>
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
import React, {useState} from 'react';
import styled from 'styled-components';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import {device} from '../../services/device';

const BookingBlock = styled.div`
    height: 380px;
    width: 25%;
    margin: 1%;
    position: sticky;
    top: 0;
`;

const Inputs = styled.div`
    height: 130px;
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
                width: 120px;
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
    height: 250px;
    width: 100%;
    background: white;
`;

function Booking() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
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

            </Prices>
        </BookingBlock>
    )
}

export default Booking;
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';

const ImagesBlock = styled.div`
    @media ${device.mobileS} {
        height: 210px;
        width: 100%;
        position: relative;
        .arrowBtn {
            height: 210px;
            position: absolute;
            z-index: 10;
            top: 0;
            transition: .3s;
            opacity: 0.5;
            img {
                width: 35px;
                margin: 0 10px;
            }
            &:hover {
                background: whitesmoke;
            }
        }
        #prev {
            left: 0;
        }
        #next {
            right: 0;
        }
        #blocks-slider {
            position: relative;
            max-width: 1;
            margin: 0 auto;
            overflow: hidden;
        }
        #blocks-slider-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            transition: 1s;
        }
        .carousel-item {
            height: 210px;
            min-width: 100%;
            background: grey;
            position: relative;
            img {
                width: 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
    @media ${device.mobileM} {
        height: 250px;
        .arrowBtn { height: 250px; }
        .carousel-item { height: 250px; }
    }
    @media ${device.mobileL} {
        height: 280px;
        .arrowBtn { height: 280px; }
        .carousel-item { height: 280px; }
    }
    @media ${device.tablet} {
        height: 430px;
        .arrowBtn { height: 430px; }
        .carousel-item { height: 430px; }
    }
    @media ${device.laptop} {
        height: 520px;
        .arrowBtn { height: 520px; }
        .carousel-item { height: 520px; }
    }
    @media ${device.laptopL} {
        height: 560px;
        .arrowBtn { height: 560px; }
        .carousel-item { height: 560px; }
    }
    @media ${device.desktop} {
        height: 700px;
        .arrowBtn { height: 700px; }
        .carousel-item { height: 700px; }
    }
    @media ${device.desktopL} {
        height: 840px;
        .arrowBtn { height: 840px; }
        .carousel-item { height: 840px; }
    }
`;

function ImagesSection(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(props.Images.length - 1);
    useEffect(() => {
        setMaxIndex(props.Images.length - 1);
    }, [props.Images])
    const prev = () => {
        currentIndex === 0 ? 
            setCurrentIndex(maxIndex)
            :
            setCurrentIndex(currentIndex - 1);
    }
    const next = () => {
        currentIndex === maxIndex ? 
            setCurrentIndex(0)
            :
            setCurrentIndex(currentIndex + 1);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex])
    return (
        <ImagesBlock>
            <button id="prev" className="arrowBtn" onClick={() => {prev()}}>
                <img src={require("../../png/prev.png")} alt=""/>
            </button>
            <button id="next" className="arrowBtn" onClick={() => {next()}}>
                <img src={require("../../png/next.png")} alt=""/>
            </button>
            <div id="blocks-slider">
                <div id="blocks-slider-wrapper" style={{'transform': `translateX(-${currentIndex*100}%)`}}>
                    {props.Images.map((elem, i) => {
                        return <div className="carousel-item" key={i}>
                            <img src={require(`../../png/${props.Images[i]}`)} alt=""/>
                        </div>
                    })}
                </div>
            </div>
        </ImagesBlock>
    )
}

export default ImagesSection;
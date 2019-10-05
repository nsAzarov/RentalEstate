import React, {useState} from 'react';
import styled from 'styled-components';
import {device} from '../../services/device';

const ImagesBlock = styled.div`
    height: 500px;
    width: 98%;
    border: 1px solid black;
    margin: 1%;
    position: relative;
    .arrowBtn {
        position: absolute;
        z-index: 10;
        top: 0;
        height: 500px;
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
        height: 500px;
        min-width: 100%;
        background: grey;
        border: 1px solid red;
    }
`;

function ImagesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([{}, {}, {}, {}, {}])
    return (
        <ImagesBlock>
            <button id="prev" className="arrowBtn" onClick={() => {setCurrentIndex(currentIndex + 1)}}>
                <img src={require("../../png/prev.png")} alt=""/>
            </button>
            <button id="next" className="arrowBtn" onClick={() => {setCurrentIndex(currentIndex - 1)}}>
                <img src={require("../../png/next.png")} alt=""/>
            </button>
            <div id="blocks-slider">
                <div id="blocks-slider-wrapper" style={{'transform': `translateX(-${currentIndex*100}%)`}}>
                    {images.map((elem, i) => {
                        return <div className="carousel-item" id={i}>{i}</div>
                    })}
                </div>
            </div>
        </ImagesBlock>
    )
}

export default ImagesSection;
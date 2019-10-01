import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {device} from '../../services/device';

const FooterWidgetArea = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    .widget {
        @media ${device.laptop} {
            padding: 16px;
            width: 200px;
        }
        @media ${device.laptopL} {
            padding: 20px;
            width: 285px;
        }
    }
`;

const BottomSection = styled.div`
    @media ${device.tablet} {
        display: none;
        ${FooterWidgetArea} {
            display: none;
        }
    }
    @media ${device.laptop} {
        width: 100%;
        background: #282D33;
        display: flex;
        ${FooterWidgetArea} {
            display: flex;
        }
    }
`;

const WidgetHeader = styled.h3`
    @media ${device.laptop} {
        font-size: 16px;
        text-indent: 8px;
        margin-bottom: 8px;
    }
    @media ${device.laptopL} {
        font-size: 18px;
        text-indent: 10px;
        margin-bottom: 10px;
    }
    color: #f0f0f0;
`;

const FirstWidget = styled.div`
    p {
        @media ${device.laptop} {
            font-size: 12px;
            line-height: 1.2;
            text-indent: 8px;
        }
        @media ${device.laptopL} {
            font-size: 14px;
            line-height: 1.5;
            text-indent: 10px;
        }
        color: #72777F;
    }
`;
const SecondWidget = styled.div`
    ul {
        a {
            @media ${device.laptop} {
                line-height: 1.2;
                font-size: 12px;
            }
            @media ${device.laptopL} {
                line-height: 1.5;
                font-size: 14px;
            }
            color: #72777F;
            display: block;
            text-decoration: none;
            transition: 0.25s;
            &:hover {
                color: #3C90BE;
            }
        }
    }
`;
const ThirdWidget = styled.div`
`;
const FourthWidget = styled.div`
`;

const SocialSidebar = styled.div`
    height: 45px;
    width: 240px;
    margin: auto;
`;

const SocialLink = styled.div`
    min-height: 40px;
    min-width: 40px;
    background: #323840;
    display: inline-block;
    margin: 6px;
    text-align: center;
    border-radius: 4px;
    transition: .3s;
    cursor: pointer;
    img {
        margin-top: 4px;
    }
    &:hover {
        background: #3C90BE;
    }
`;

const Bottom = () => {
    return(
        <BottomSection>
            <FooterWidgetArea>
                <FirstWidget className="widget">
                    <WidgetHeader>Looking to buy, sell or rent a property?</WidgetHeader>
                    <p>A move offers a wide choice of ads real estate for sale and properties for sale: apartments and houses for sale, apartments for sale, villas and houses, penthouses, plots, apartment for sale, brokering apartments, apartments without mediation, second-hand apartments for sale and more.</p>
                    <SocialSidebar>
                        <SocialLink>
                            <img src={require("../../png/facebook.png")} alt=""/>
                        </SocialLink>
                        <SocialLink>
                            <img src={require("../../png/telegram.png")} alt=""/>
                        </SocialLink>
                        <SocialLink>
                            <img src={require("../../png/twitter.png")} alt=""/>
                        </SocialLink>
                        <SocialLink>
                            <img src={require("../../png/youtube.png")} alt=""/>
                        </SocialLink>
                    </SocialSidebar>
                </FirstWidget>
                <SecondWidget className="widget">
                    <WidgetHeader>Assets by Region</WidgetHeader>
                    <ul>
                        <Link to='/'>Tel Aviv – Yafo</Link>
                        <Link to='/'>Netania & Surroundings</Link>
                        <Link to='/'>Raanana - Kfar Saba</Link>
                        <Link to='/'>Zichron – Cesarea & Surroundings</Link>
                        <Link to='/'>Jerusalem & Surroundings</Link>
                        <Link to='/'>Jerusalem</Link>
                    </ul>
                </SecondWidget>
                <ThirdWidget className="widget"></ThirdWidget>
                <FourthWidget className="widget"></FourthWidget>
            </FooterWidgetArea>
        </BottomSection>
    );
}

export default Bottom;
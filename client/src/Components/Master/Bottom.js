import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {device} from '../../services/device';

const FooterWidgetArea = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
`;

const BottomSection = styled.div`
    @media ${device.mobileL} {
        display: none;
        ${FooterWidgetArea} {
            display: none;
        }
    }
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
    @media ${device.mobileL} {
        font-size: 16px;
        margin-bottom: 8px;
    }
    @media ${device.laptop} {
        font-size: 16px;
        margin-bottom: 8px;
    }
    @media ${device.laptopL} {
        font-size: 18px;
        margin-bottom: 10px;
    }
    color: #f0f0f0;
`;

const FirstWidget = styled.div`
    @media ${device.mobileL} {
        padding: 16px;
        width: 200px;
        p {
            font-size: 12px;
            line-height: 1.2;
            text-indent: 8px;
            color: #72777F;
        }
    }
    @media ${device.laptop} {
        padding: 16px;
        width: 200px;
        p {
            font-size: 12px;
            line-height: 1.2;
            text-indent: 8px;
            color: #72777F;
        }
    }
    @media ${device.laptopL} {
        padding: 20px;
        width: 285px;
        p {
            font-size: 14px;
            line-height: 1.5;
            text-indent: 10px;
        }
    }
`;

const WidgetWithLinks = styled.div`
    @media ${device.mobileL} {
        padding: 16px;
        width: 200px;
    }
    @media ${device.laptop} {
        padding: 16px;
        width: 200px;
    }
    @media ${device.laptopL} {
        padding: 20px;
        width: 285px;
    }
    ul {
        a {
            @media ${device.mobileL} {
                line-height: 1.2;
                font-size: 12px;
            }
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
                <FirstWidget>
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
                <WidgetWithLinks>
                    <WidgetHeader>Assets By Region</WidgetHeader>
                    <ul>
                        <Link to='/'>Tel Aviv – Yafo</Link>
                        <Link to='/'>Netania & Surroundings</Link>
                        <Link to='/'>Raanana - Kfar Saba</Link>
                        <Link to='/'>Zichron – Cesarea & Surroundings</Link>
                        <Link to='/'>Jerusalem & Surroundings</Link>
                        <Link to='/'>Jerusalem</Link>
                    </ul>
                </WidgetWithLinks>
                <WidgetWithLinks>
                    <WidgetHeader>About RentalEstate</WidgetHeader>
                    <ul>
                        <Link to='/'>About Us</Link>
                        <Link to='/'>Press</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investor Relations</Link>
                        <Link to='/'>Content Integrity</Link>
                    </ul>
                </WidgetWithLinks>
                <WidgetWithLinks>
                    <WidgetHeader>Do Business With Us</WidgetHeader>
                    <ul>
                        <Link to='/'>Owners</Link>
                        <Link to='/'>Business Advantage</Link>
                        <Link to='/'>Sponsored Placements</Link>
                        <Link to='/'>Advertise with Us</Link>
                        <Link to='/'>Become an Affiliate</Link>
                    </ul>
                </WidgetWithLinks>
            </FooterWidgetArea>
        </BottomSection>
    );
}

export default Bottom;
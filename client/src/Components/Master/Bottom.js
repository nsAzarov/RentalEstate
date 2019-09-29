import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const BottomSection = styled.div`
    width: 100%;
    background: #282D33;
`;

const FooterWidgetArea = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
`;

const WidgetHeader = styled.h3`
    color: #f0f0f0;
    text-indent: 10px;
    margin-bottom: 10px;
    font-size: 18px;
`;

const FirstWidget = styled.div`
    p {
        color: #72777F;
        line-height: 1.5;
        text-indent: 10px;
        font-size: 14px;
    }
    padding: 20px;
    width: 285px;
`;
const SecondWidget = styled.div`
    ul {
        a {
            color: #72777F;
            display: block;
            line-height: 1.5;
            text-decoration: none;
            transition: 0.25s;
            font-size: 14px;
            &:hover {
                color: #3C90BE;
            }
        }
    }
    padding: 20px;
    width: 285px;
`;
const ThirdWidget = styled.div`
    padding: 20px;
    width: 285px;
`;
const FourthWidget = styled.div`
    padding: 20px;
    width: 285px;
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
                    <WidgetHeader>Looking to buy, rent, sell or rent a property?</WidgetHeader>
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
                <SecondWidget>
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
                <ThirdWidget></ThirdWidget>
                <FourthWidget></FourthWidget>
            </FooterWidgetArea>
        </BottomSection>
    );
}

export default Bottom;
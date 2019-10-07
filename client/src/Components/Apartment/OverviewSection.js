import React from 'react';
import styled from 'styled-components';

import bathtub from '../../png/bathtub.png';
import bed from '../../png/bed.png';
import group from '../../png/group.png';

import kids from '../../png/kids.png';
import smoking from '../../png/smoking.png';
import pets from '../../png/pets.png';

const OverviewBlock = styled.div`
    width: 100%;
    h1 {
        padding: 10px 20px 0 20px;
        font-size: 24px;
    }
    p {
        padding: 10px 20px;
    }
    #icons-area {
        display: flex;
        justify-content: space-between;
        #bbg {
            display: flex;
        }
        #psk {
            display: flex;
        }
    }
    .small-info {
        display: flex;
        align-items: center;
		font-weight: bold;
        font-size: 16px;
		margin: 0 10px;
        img {
            height: 30px;
            margin-right: 5px;
        }
    }
`;

function OverviewSection(props) {
    return (
        <OverviewBlock>
            <h1>{props.Info.heading}</h1>
            <p>{props.Info.description}</p>
            <div id="icons-area">
                <div id="bbg">
                    <div className="small-info">
                        <img src={bed} alt=""/>
                        {props.Info.bedrooms}
                    </div>
                    <div className="small-info">
                        <img src={bathtub} alt=""/>
                        {props.Info.bathrooms}
                    </div>
                    <div className="small-info">
                        <img src={group} alt=""/>
                        {props.Info.guests}
                    </div>
                </div>
                <div id="psk">
                    <div className="small-info">
                        <img src={kids} title="Kids Friendly" alt="Kids Friendly"/>
                        {props.Info.kidFriendly ? 'Yes' : 'No'}
                    </div>
                    <div className="small-info">
                        <img src={smoking} title="Smoking Allowed" alt="Smoking Allowed"/>
                        {props.Info.smokingAllowed ? 'Yes' : 'No'}
                    </div>
                    <div className="small-info">
                        <img src={pets} title="Pets Allowed" alt="Pets Allowed"/>
                        {props.Info.petsAllowed ? 'Yes' : 'No'}
                    </div>
                </div>
            </div>
        </OverviewBlock>
    )
}

export default OverviewSection;
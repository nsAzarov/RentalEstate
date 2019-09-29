import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import bathtub from '../../png/bathtub.png';
import bed from '../../png/bed.png';
import group from '../../png/group.png';

const ItemBlock = styled.div`
	height: 380px;
	width: 360px;
	background: whitesmoke;
	margin: 10px;
`;

const ImageSection = styled.div`
	height: 250px;
	width: 360px;
	background: url(${props => props.backgroundImage}) no-repeat;
	background-size: cover;
`;

const Title = styled.h1`
	font-size: 18px;
	margin: 5px 0 10px 5px;
	color: #323840;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
`;

const Description = styled.h2`
	margin-left: 5px;
	font-size: 12px;
	text-indent: 5px;
	font-style: italic;
	color: #323840;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
`;

const Info = styled.div`
	height: 40px;
	width: 100%;
	margin-top: 10px;
	display: flex;
	align-items: center;
	position: relative;
	.small-info {
		margin: 0 10px;
		display: flex;
		align-items: center;
		font-size: 16px;
		font-weight: bold;
		img {
			height: 30px;
			margin-right: 5px;
		}
	}
	#price {
		position: absolute;
		right: 10px;
		font-size: 28px;
		font-weight: bold;
		color: #f0cb86;
	}
`;

const Item = (props) => {
	let img = require(`../../png/${props.item.images[0]}`);
	return (
		<ItemBlock>
			<ImageSection backgroundImage={img} alt=""/>
			<Title>{props.item.heading}</Title>
			<Description>{props.item.description}</Description>
			<Info>
				<div className="small-info">
					<img src={bed} alt=""/>
					{props.item.bedrooms}
				</div>
				<div className="small-info">
					<img src={bathtub} alt=""/>
					{props.item.bathrooms}
				</div>
				<div className="small-info">
					<img src={group} alt=""/>
					{props.item.guests}
				</div>
				<div id="price">53 268 $/n</div>
			</Info>
		</ItemBlock>
	);
}

export default Item;
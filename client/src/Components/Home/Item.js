import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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

const Item = (props) => {
	let img = require(`../../png/${props.item.images[0]}`);
	return (
		<ItemBlock>
			<ImageSection backgroundImage={img} alt=""/>
			<Title>{props.item.heading}</Title>
			<Description>{props.item.description}</Description>
		</ItemBlock>
	);
}

export default Item;
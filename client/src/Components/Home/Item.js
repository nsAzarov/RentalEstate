import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import bathtub from '../../png/bathtub.png';
import bed from '../../png/bed.png';
import group from '../../png/group.png';
import {device} from '../../services/device';

const ItemBlock = styled(Link)`
	height: 380px;
	@media ${device.tablet} {
        width: 23.8%;
		margin: 0.6%;
		height: 280px;
	}
	@media ${device.laptop} {
        width: 23.8%;
		margin: 0.6%;
		height: 280px;
	}
	@media ${device.laptopL} {
        width: 23.8%;
        margin: 0.6%;
        height: 380px;
	}
    @media ${device.desktop} {
        width: 19.2%;
		margin: 0.4%;
	}
	@media ${device.desktopL} {
        width: 19.2%;
		margin: 0.4%;
    }
	background: whitesmoke;
	position: relative;
`;

const City = styled.div`
	position: absolute;
	right: 0;
	@media ${device.tablet} {
		top: 135px;
		padding: 6px 16px 6px 6px;
		font-size: 15px;
	}
	@media ${device.laptop} {
		top: 135px;
		padding: 6px 16px 6px 6px;
		font-size: 15px;
	}
	@media ${device.laptopL} {
		top: 180px;
		padding: 8px 20px 8px 8px;
		font-size: 16px;
	}
	background: #f0cb86;
	border-radius: 1px;
`;

const ImageSection = styled.div`
	height: 250px;
	@media ${device.tablet} {
		height: 180px;
	}
	@media ${device.laptop} {
		height: 180px;
	}
	@media ${device.laptopL} {
		height: 250px;
	}
	width: 100%;
	background: url(${props => props.backgroundImage}) no-repeat;
	background-size: cover;
`;

const Title = styled.h1`
	@media ${device.tablet} {
		font-size: 16px;
		margin: 5px 0 5px 5px;
	}
	@media ${device.laptop} {
		font-size: 16px;
		margin: 5px 0 5px 5px;
	}
	@media ${device.laptopL} {
		font-size: 18px;
		margin: 5px 0 10px 5px;
	}
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
`;

const Description = styled.h2`
	@media ${device.tablet} {
		font-size: 10px;
	}
	@media ${device.laptop} {
		font-size: 10px;
	}
	@media ${device.laptopL} {
		font-size: 12px;
	}
	margin-left: 5px;
	text-indent: 5px;
	font-style: italic;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
`;

const Info = styled.div`
	@media ${device.tablet} {
		margin-top: 0px;
	}
	@media ${device.laptop} {
		margin-top: 0px;
	}
	@media ${device.laptopL} {
		margin-top: 10px;
	}
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
		font-weight: bold;
		@media ${device.tablet} {
			font-size: 14px;
			margin: 0 5px;
			img {
				height: 24px;
				margin-right: 5px;
			}
		}
		@media ${device.laptop} {
			font-size: 14px;
			margin: 0 5px;
			img {
				height: 24px;
				margin-right: 5px;
			}
		}
		@media ${device.laptopL} {
			font-size: 16px;
			margin: 0 10px;
			img {
				height: 30px;
				margin-right: 5px;
			}
		}
	}
	#price {
		@media ${device.tablet} {
			font-size: 24px;
		}
		@media ${device.laptop} {
			font-size: 24px;
		}
		@media ${device.laptopL} {
			font-size: 28px;
		}
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
		<ItemBlock to="/Apartment">
			<ImageSection backgroundImage={img} alt=""/>
			<City>{props.item.city}</City>
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
				<div id="price">{(props.item.price).toLocaleString('ru-RU')}&#8362;</div>
			</Info>
		</ItemBlock>
	);
}

export default Item;
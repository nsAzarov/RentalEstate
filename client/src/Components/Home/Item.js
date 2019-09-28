import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ItemBlock = styled.div`
	height: 480px;
	min-width: 350px;
	background: grey;
	margin: 10px;
`;

const ImageSection = styled.div`
	height: 350px;
	width: 100%;
	background: whitesmoke;
`;

const Item = () => {
	return (
		<ItemBlock>
			<ImageSection>
				<Link className="Item-link" to="/" target="_blank">Learn React</Link>
			</ImageSection>
		</ItemBlock>
	);
}

export default Item;
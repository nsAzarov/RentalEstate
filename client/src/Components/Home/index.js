import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Item from './Item';

const HomeContent = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Home = () => {
    return (
        <HomeContent>
            <Menu />
            <Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item />
        </HomeContent>
    );
}

export default Home;
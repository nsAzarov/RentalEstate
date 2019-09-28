import React, {Fragment} from 'react';
import styled from 'styled-components';
import Top from '../Master/Top';
import Bottom from '../Master/Bottom';
import Signature from '../Master/Signature';
import Menu from './Menu';
import Item from './Item';

const HomeContent = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Home = () => {
    return (
        <Fragment>
            <Top />
            <HomeContent>
                <Menu />
                <Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item /><Item />
            </HomeContent>
            <Bottom />
            <Signature />
        </Fragment>
    );
}

export default Home;
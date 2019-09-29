import React, {useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import Top from '../Master/Top';
import Bottom from '../Master/Bottom';
import Signature from '../Master/Signature';
import Menu from './Menu';
import Item from './Item';
import APIservice from '../../services/APIservice';

const HomeContent = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Home = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        const ApartmentsAPIservice = new APIservice();
        ApartmentsAPIservice
            .getAllApartments()
            .then(data => setApartments(data));
    }, [])
    return (
        <Fragment>
            <Top />
            <HomeContent>
                <Menu />
                {apartments.map((element, i) => {
                    return <Item item={element} key={i}/>
                })}
            </HomeContent>
            <Bottom />
            <Signature />
        </Fragment>
    );
}

export default Home;
import React from 'react';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import Listpage from '../features/list/pages/Listpage';
import Footer from '../components/footer/Footer';

const List = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Listpage/>
        </div>
    );
};


export default List;
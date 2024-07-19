import React from 'react';
import '../styles/page-move-navlink.scss'
import { NavLink } from 'react-router-dom';

const PageMoveBtn = (myNavLink) => {
    return (
        <div className='page-move-btn-form'>
               <NavLink to={myNavLink}></NavLink>
        </div>
    );
};

export default PageMoveBtn;
import React from 'react';
import{
    PageMoveNavLink
} from '../index.js'

import '../styles/my-detail-frame.scss'

const MydetailFrame = () => {
    return (
        <div className='edit-info'>
            <div className='button-navlink'>
                
                <button className='my-main-btn'>MY MAIN</button>

                <PageMoveNavLink
                     myNavLink=''
                />
            </div>
        </div>
    );
};

export default MydetailFrame;
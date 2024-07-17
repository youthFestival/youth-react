import React from 'react';
import '../styles/userfind.scss'
import {FindTabMenu} from '../index.js';

const UserFind = () => {
    return (
        <div className='user-find'>
            <div className='form'>
            
                <span className='title'>
                    계정찾기
                </span>
               

                <FindTabMenu />



                
            </div>
        </div>
    );
};

export default UserFind;
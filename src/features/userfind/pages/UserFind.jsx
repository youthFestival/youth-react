import React from 'react';
import '../styles/user-find.scss';
import FindAccountHeader from '../component/FindAccountHeader.jsx';
import RegisterFindUserFooter from '../../../components/footer/RegisterFindUserFooter.jsx';
import {
    FindTabMenu
} from '../index.js';

const UserFind = () => {
    return (
        <div className='user-find'>

            <FindAccountHeader />

            <div className='form'>

                <span className='title'>
                    계정찾기
                </span>

                <FindTabMenu />

            </div>

            <RegisterFindUserFooter />
        </div>
    );
};

export default UserFind;
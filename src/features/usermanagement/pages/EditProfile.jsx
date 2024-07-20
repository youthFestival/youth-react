import React from 'react';
import '../styles/edit-profile.scss'
import { 
     AuthInput, AuthBtn
    } from '../../authentication/index.js';

const EditProfile = () => {
    return (
        <div className='edit-profile'>
            <div className=''>
                  <AuthInput />
            </div>
        </div>
    );
};

export default EditProfile;

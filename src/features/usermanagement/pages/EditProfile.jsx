import React from 'react';
import { AuthInput, AuthBtn } from '../../authentication/index.js';
import '../styles/edit-profile.scss';

/**
 * 회원정보 수정 컴포넌트
 * @returns 
 */

const EditProfile = () => {
    const fields = [
        { label: '이름', inputType: 'text', inputClassName: 'name' },
        { label: '아이디', inputType: 'text', inputClassName: 'id' },
        { label: '이메일', inputType: 'email', inputClassName: 'email' },
        { label: '전화번호', inputType: 'tel', inputClassName: 'tel' },
        { label: '성별', inputType: 'text', inputClassName: 'gender' },
        { label: '주소', inputType: 'text', inputClassName: 'address' }
    ];

    return (
        <div className='edit-profile'>
            {fields.map((profile, index) => (
                <div key={index} className='edit'>
                    <div className={profile.inputClassName}>
                        <h3>{profile.label}</h3>
                        <AuthInput 
                            inputType={profile.inputType}
                            inputClassName={`${profile.inputClassName}-input`}
                            placeholder={`Enter your ${profile.label}`}
                            showAuthIcon={false}
                        />
                    </div>
                </div>
            ))}
            <div className='btn'>
                <AuthBtn
                    btnClassName='update'
                    btnText='수정'
                />
                
                <AuthBtn
                    btnClassName='cancel'
                    btnText='취소'
                />
            </div>

        </div>
    );
};

export default EditProfile;

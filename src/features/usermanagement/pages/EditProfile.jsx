import React, { useState, useEffect, useContext } from 'react';
import { AuthInput, AuthBtn } from '../../authentication/index.js';
import axios from 'axios';
import '../styles/edit-profile.scss';
// import { AuthContext } from '../../../contexts/AuthContext.jsx';

/**
 * 회원정보 수정 컴포넌트
 * @returns 
 */

const EditProfile = ( {userId}) => {
    // const { user } = useContext(AuthContext);
    const [profile, setProfile] = useState({
        name: '',
        id: '',
        email: '',
        tel: '',
        gender: '',
        address: ''
    });

    const fields = [
        { label: '이름', inputType: 'text', inputClassName: 'name', key: 'name' },
        { label: '아이디', inputType: 'text', inputClassName: 'id', key: 'id' },
        { label: '이메일', inputType: 'email', inputClassName: 'email', key: 'email' },
        { label: '전화번호', inputType: 'tel', inputClassName: 'tel', key: 'tel' },
        { label: '성별', inputType: 'text', inputClassName: 'gender', key: 'gender' },
        { label: '주소', inputType: 'text', inputClassName: 'address', key: 'address' }
    ];

    const getProfileHandler = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            console.log(`API URL: ${apiUrl}`);
            const response = await axios.get(`${apiUrl}/user`,{
                userId
            });
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.log(err);
            return {};
        }
    }

    useEffect(() => {
        // if (user) { // Ensure user is available and has an id
            const fetchData = async () => {
                const data = await getProfileHandler();
                setProfile(data);
            };

            fetchData();
        // }
    }, [userId]);

    const handleChange = (key, value) => {
        setProfile({
            ...profile,
            [key]: value
        });
    };

    const handleUpdate = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            await axios.put(`${apiUrl}/user/${userId}`, profile);
            alert('프로필 정보 수정이 완료되었습니다.');
        } catch (err) {
            console.log(err);
            alert('프로필 수정에 실패했습니다.');
        }
    };

    return (
        <div className='edit-profile'>
            {fields.map((field) => (
                <div key={field.key} className='edit'>
                    <div className={field.inputClassName}>
                        <h3>{field.label}</h3>
                        <AuthInput 
                            inputType={field.inputType} 
                            inputClassName={`${field.inputClassName}-input`}
                            placeholder={`Enter your ${field.label}`}
                            showAuthIcon={false}
                            value={profile[field.key]}
                            onChange={(e) => handleChange(field.key, e.target.value)}
                        />
                    </div>
                </div>
            ))}
            <div className='btn'>
                <AuthBtn
                    btnClassName='update'
                    btnText='수정'
                    btnOnClick={handleUpdate}
                />
                <AuthBtn
                    btnClassName='cancel'
                    btnText='취소'
                    btnOnClick={() => console.log('취소 클릭됨')}
                />
            </div>
        </div>
    );
};

export default EditProfile;

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/my-detail-frame.scss'

const MydetailFrame = () => {
    return (
        <div className='edit-info'>
            <div className='button-navlink'>
 
                <NavLink to='/mypage'>
                    <button className='my-main-btn'>MY MAIN</button>
                </NavLink>

                <NavLink
                    to={'./edit-profile'}
                    children={"회원정보 수정"}
                    className='navlink'
                />

                <NavLink
                    to={'./edit-artist'}
                    children={"아티스트 수정"}
                    className='navlink'
                />

                <NavLink
                    to={'./favorites'}
                    children={"찜 목록"}  
                    className='navlink'              
                />

                <NavLink
                    to={'./inquiries'}
                    children={"1:1 문의"}
                    className='navlink'
                />
                
                <NavLink
                    to={'./qna'}
                    children={"내 QnA"}
                    className='navlink'
                />

                <NavLink
                    to={'./comments'}
                    children={"내 기대평"}
                    className='navlink'
                />

                <NavLink
                    to={'./deletion'}
                    children={"회원 탈퇴"}   
                    className='navlink'             
                />

            </div>
            <Outlet/>
        </div>
    );
};

export default MydetailFrame;
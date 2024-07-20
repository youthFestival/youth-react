import React from 'react';
import '../styles/icon-box.css'
import { NavLink } from 'react-router-dom';
/**
 * Mypage 아이콘 박스 컴포넌트
 * @returns 
 */

function IconBox ({
                  iconImg1, 
                  iconImg2, 
                  iconImg3, 
                  iconText1, 
                  iconText2, 
                  iconText3,
                  navLink1,
                  navLink2,
                  navLink3}) 
{
    return (
        <div className='icon-box'>
            <div className='icon-text'>
                <NavLink to={navLink1} className='my-icon-navlink'>
                    <div className='icon-1'>
                        <img src={iconImg1} alt="아이콘 1" className='icon-image1'/>
                        <p className='icon-text1'>
                        {iconText1}
                        </p>
                    </div>
                </NavLink>
                <NavLink to={navLink2} className='my-icon-navlink'>
                    <div className='icon-2'>
                        <img src={iconImg2} alt="아이콘 2" className='icon-image2'/>
                        <p className='icon-text1'>
                            {iconText2}
                        </p>
                    </div>
                </NavLink>
                <NavLink to={navLink3} className='my-icon-navlink'>
                    <div className='icon-3'>
                        <img src={iconImg3} alt="아이콘 3" className='icon-image3'/>
                        <p className='icon-text1'>
                            {iconText3}
                        </p>
                    </div>
                </NavLink>
            </div>
        </div>
   
    );
};

export default IconBox;
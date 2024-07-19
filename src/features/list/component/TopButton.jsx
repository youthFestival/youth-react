import React from 'react';
import '../styles/topbutton.scss'

/**
 * 탑 버튼 컴포넌트 
 * @returns 
 */
const TopButton = () => {

    const topButtonHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        })
    }

    return (
        <div className="top-button">
           <button id="topbtn" onClick={topButtonHandler}>
               <img 
                     src="/icons/top_button.png" 
                     alt="탑 버튼" 
                     className='image'
                />
           </button>
        </div>
    );
};

export default TopButton;
import React, { useState } from 'react';
import '../styles/tabcomponent.scss'

const TabComponent = ({ listType, listText, listContents }) => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleContent = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className='list-component'>
            <label htmlFor='list-input'>{listText}</label>
            <input 
                type={listType}
                id='list-input'
                className=''
                onClick={toggleContent}
            /> 
            <span className=''>{listText}</span>
            <div className={`toggle-content ${isToggled ? 'open' : ''}`}>              
                {listContents}
            </div>
        </div>
    );
};

export default TabComponent;


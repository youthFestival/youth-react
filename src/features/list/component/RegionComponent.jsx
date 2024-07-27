import React from 'react';
import '../styles/region-component.scss'

/**
 * 포스터 컴포넌트  
 * @returns 
 */

const RegionComponent = ({ posterSrc, posterAlt, festivalTitle, festivalLocation,festivalStartDate, festivalEndDate}) => {
    return (
        <div className='postercomponent'>  
                <div className='form'>
                    <div className='contents'>
                        
                        <img 
                            className='image'
                            src={posterSrc}
                            alt={posterAlt}
                        />
                        <div className='span-container'>
                            <span className='span1'>{festivalTitle}</span>
                            <span className='span2'>{festivalLocation}</span>
                            <span className='span2'>{festivalStartDate} ~ {festivalEndDate}</span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default RegionComponent;
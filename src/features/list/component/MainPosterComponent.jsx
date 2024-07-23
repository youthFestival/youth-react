import React from 'react';

import '../styles/main-poster-component.scss'

/**
 * 포스터 컴포넌트  
 * @returns 
 */

const MainPosterComponent = ({ posterSrc, posterAlt, festivalTitle, festivalLocation, festivalDate, index }) => {
    return (
        <div className='postercomponent'>  
                <div className='form'>
                    <div className='contents'>
                        
                        <img 
                            className='image'
                            src={posterSrc}
                            alt={posterAlt}
                        />
                        <div className="overlay">
                            <p className="ranking-number">{index}</p>
                        </div> 
                        <div className='bottom'>
                            <span className='span1'>{festivalTitle}</span>
                            <span className='span2'>{festivalLocation}</span>
                            <span className='span2'>{festivalDate}</span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MainPosterComponent;
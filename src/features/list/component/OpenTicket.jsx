import React from 'react';
import '../styles/open-ticket.scss'

const OpenTicket = ({ posterSrc, posterAlt, festivalTitle, festivalOpenDate }) => {
    return (
        <div className='openticket'>  
            <div className='form'>
                <div className='img-container'>

                    <img 
                        className='image'
                        src={posterSrc}
                        alt={posterAlt}
                    />
                </div>
                <div>
                    <span className='open-date'>{festivalOpenDate}</span>
                    <span className='open-title'>{festivalTitle}</span>
                </div>
            </div>
        </div>
    );
};

export default OpenTicket;
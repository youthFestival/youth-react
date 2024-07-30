import React from 'react';
import '../styles/open-ticket.scss'

const OpenTicket = ({ posterSrc, posterAlt, festivalTitle, festivalTicketOpen }) => {
    return (
        <div className='openticket'>  
            <div className='img-container'>
                <img 
                    className='image'
                    src={posterSrc}
                    alt={posterAlt}
                />
            </div>
            <div className='content-container'>
                <div className='open-date-container'>
                    <span className='open-date'>{festivalTicketOpen}</span><br></br>
                </div>
                <div className='open-title-container'>
                    <span className='open-title'>{festivalTitle}</span>
                </div>
            </div>
        </div>
    );
};

export default OpenTicket;
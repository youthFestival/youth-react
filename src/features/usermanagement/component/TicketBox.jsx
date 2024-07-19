import React from 'react';
import '../styles/ticket-box.css'
/**
 * Mypage 다른 페이지 이동 아이콘 컴포넌트
 * @returns 
 */

function TicketBox ({
                  ticketImg1, 
                  ticketImg2,  
                  ticketText1, 
                  ticketText2}) 
{
    return (
        <div className='ticket-box'>
            <div className='ticket-text'>
                <div className='ticket-1'>
                    <img src={ticketImg1} alt="티켓 아이콘 1" className='ticket-icon1'/>
                    <p className='ticket-text1'>
                       {ticketText1}
                    </p>
                </div>
                <div className='ticket-2'>
                    <img src={ticketImg2} alt="티켓 아이콘 2" className='ticket-icon2'/>
                    <p className='ticket-text2'>
                        {ticketText2}
                    </p>
                </div>
            </div>
        </div>
   
    );
};

export default TicketBox;
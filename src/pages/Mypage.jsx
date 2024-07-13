import React from 'react';
import { 
    IconBox,
    TicketBox
} from '../features/usermanagement';
import '../styles/mypage.css'

const Mypage = () => {
    return (
        <div className='my-container'>
            <div className='my-contents'>
                 
                 <div className='my-management-box'>
                    <div className='my-profile'>

                    </div>
                 </div>


                <IconBox 
                      iconImg1='./icons/mypage/mainpage.png'
                      iconImg2='./icons/mypage/festivalpage.png'
                      iconImg3='./icons/mypage/calanderpage.png'

                      iconText1='메인페이지'
                      iconText2='페스티벌 페이지'
                      iconText3='캘린더 페이지'
                   
                />

                <IconBox 
                      iconImg1='./icons/mypage/advice.png'
                      iconImg2='./icons/mypage/myQnA.png'
                      iconImg3='./icons/mypage/myComment.png'

                      iconText1='1:1 문의'
                      iconText2='내 QnA'
                      iconText3='내 기대평'
                />

                <TicketBox
                      ticketImg1='./icons/mypage/interpark.png'
                      ticketImg2='./icons/mypage/melonticket.png'

                      ticketText1='인터파크'
                      ticketText2='멜론티켓'
                />
            </div>
        </div>
    );
};

export default Mypage;
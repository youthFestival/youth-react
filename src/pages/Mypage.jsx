import React from 'react';
import { 
    IconBox,
    TicketBox,
    MyInfoIcon
} from '../features/usermanagement';
import '../styles/mypage.css'

const Mypage = () => {
    return (
        <div className='my-container'>
            <div className='my-contents'>
                 
                 <div className='my-management-box'>
                    <div className='my-profile-info'>
                        <div className='my-real-profile'>

                            <img src="./icons/mypage/myprofileimg.png" alt="내 프로필 사진" className='my-profile-image'/>

                            <div className='info-text'>
                                 <span className='info-span'>민준</span>
                                 <span className='info-span'>Kangminjun1234</span>
                            </div>
                        </div>
                    </div>
                    <MyInfoIcon
                         editImg='./icons/mypage/infoedit.png'
                         editText='정보 수정'

                         festivalImg='./icons/mypage/pick.png'
                         pickFestivalText='찜 목록'

                         artistImg='./icons/mypage/artistedit.png'
                         pickArtistText='아티스트 수정'

                         deleteImg='./icons/mypage/deleteuser.png'
                         deleteInfoText='회원 탈퇴'
                    />
                 </div>


                <IconBox 
                      iconImg1='./icons/mypage/mainpage.png'
                      iconImg2='./icons/mypage/festivalpage.png'
                      iconImg3='./icons/mypage/calanderpage.png'

                      iconText1='메인페이지'
                      iconText2='페스티벌 페이지'
                      iconText3='캘린더 페이지'

                      navLink1={'/home'}
                      navLink2={'/list'}
                      navLink3={'/calendar'}
                   
                />

                <IconBox 
                      iconImg1='./icons/mypage/advice.png'
                      iconImg2='./icons/mypage/myQnA.png'
                      iconImg3='./icons/mypage/myComment.png'

                      iconText1='1:1 문의'
                      iconText2='내 QnA'
                      iconText3='내 기대평'

                      navLink1={'/mydetail/inquiries'}
                      navLink2={'/mydetail/Qna'}
                      navLink3={'/mydetail/comments'}
                />
               
                
                <div className='ticket-guide-icon'>
                    <div className='ticket-guide'>
                        <img 
                              src="./icons/mypage/ticketpage.png" 
                              alt="티켓 가이드 아이콘" 
                              className='guide-icon'
                        />
                    </div>
                    <img
                            src='./icons/mypage/imagechain.png' 
                            className='chain-image'
                    />
                    
                    <TicketBox
                        ticketImg1='./icons/mypage/interpark.png'
                        ticketImg2='./icons/mypage/melonticket.png'

                        ticketText1='인터파크'
                        ticketText2='멜론티켓'
                    />
                </div>
            </div>
        </div>
    );
};

export default Mypage;
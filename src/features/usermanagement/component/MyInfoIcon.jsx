import React from 'react';
import '../styles/myinfoicon.css'
/**
 * Mypage 내 정보 관리 아이콘 컴포넌트
 * @returns 
 */

function MyInfoIcon ({
            editImg,
            festivalImg,
            artistImg,
            deleteImg,
            editText,
            pickFestivalText,
            pickArtistText,
            deleteInfoText}) 
{
    return (
        <div className='myinfo-icon-form'>

            <div className='info-edit'>
                 <img src={editImg} alt='정보 수정 아이콘' className='info-edit-icon'/>
                 <p className='edit-text-p'>
                    {editText}
                 </p>
            </div>

            <div className='pick-festival'>
                 <img src={festivalImg} alt='정보 수정 아이콘' className='pick-fesitval-icon'/>
                 <p className='pick-festival-text-p'>
                    {pickFestivalText}
                 </p>
            </div>

            <div className='pick-artist'>
                 <img src={artistImg} alt='정보 수정 아이콘' className='pick-artist-icon'/>
                 <p className='pick-artist-text-p'>
                    {pickArtistText}
                 </p>
            </div>


            <div className='delete-info'>
                 <img src={deleteImg} alt='정보 수정 아이콘' className='delete-info-icon'/>
                 <p className='delete-info-text-p'>
                    {deleteInfoText}
                 </p>
            </div>
        </div>
   
    );
};

export default MyInfoIcon;
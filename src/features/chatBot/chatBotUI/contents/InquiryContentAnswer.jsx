import React from 'react'

import '../../styles/content-inquiry.css'
import Profile from '../../icons/profile_image.png'
const InquiryContentAnswer = ({answer, link}) => {
    return (
        <div className='answer'>
                <img src={Profile} alt="" />
            <div className='content'>
                <span className='title'>YoothSupporter</span>
                <span className='text'>{answer}{link && <a href={link} target="_blank" rel="noopener noreferrer">바로가기</a>}</span>
            </div>
        </div>
    )
}

export default InquiryContentAnswer
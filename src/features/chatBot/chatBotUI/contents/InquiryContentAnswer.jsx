import React from 'react'

import '../../styles/content-inquiry.css'
import Profile from '../../icons/profile_image.png'
const InquiryContentAnswer = ({answer}) => {
    return (
        <div className='answer'>
                <img src={Profile} alt="" />
            <div className='content'>
                <span className='title'>YoothSupporter</span>
                <span className='text'>{answer}</span>
            </div>
        </div>
    )
}

export default InquiryContentAnswer
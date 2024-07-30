import React from 'react'

import '../../styles/content-inquiry.css'

const InquiryContentQuestion = ({question}) => {
    return (
        <div className='question'>
            <div className='content'>
                <span className='text'>{question}</span>
            </div>
        </div>
    )
}

export default InquiryContentQuestion
import React from 'react'
import './top-talk-area-list.scss'

const TopTalkAreaList = ({ username, event, onEventClick }) => {
    const { id, category, content, redirectUrl, createdAt } = event;
    return (
        <div className='top-talk-area-list-container'>
            <div className='header'>
                <div className='category'> [ {category} ] </div>
                <div className='event-push'> {createdAt}</div>
            </div>
            <div className='content'>
                {username} 님, {content}
            </div>
            <div className='footer' onClick={() => onEventClick(id, redirectUrl)}>
                ▶ 바로가기
            </div>
            
        </div>
    )
}

export default TopTalkAreaList
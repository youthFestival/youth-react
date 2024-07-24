import React from 'react'
import { format } from 'date-fns';
import './top-talk-area-list.scss'

const TopTalkAreaList = ({ username, event, onEventClick, read }) => {
    const { id, category, content, redirectUrl, createdAt } = event;
    const formattedDate = format(new Date(createdAt), 'yyyy-MM-dd HH:mm');
    return (
        <div className='top-talk-area-list-container'>
            <div className='header'>
                <div className='category' style={read ? {} : {color: '#ddd'}}> [ {category} ] </div>
                <div className='event-push'> {formattedDate}</div>
            </div>
            <div className='content' style={read ? {} : {color: '#ddd'}}>
                {username} 님, {content}
            </div>
            <div className='footer' onClick={() => onEventClick(id, redirectUrl)}>
                ▶ 바로가기
            </div>
        </div>
    )
}

export default TopTalkAreaList
import React from 'react'
import './top-talk-area-list.scss'
const TopTalkAreaList = ({username}) => {
    return (
        <div className='top-talk-area-list-container'>
            <div className='header'>
                <div className='category'> [ 관람일 D-7 ]  2024 인천펜타포트 락 페스티벌</div>
                <div className='event-push'> 2024-08-02(금) 12:00</div>
            </div>
            <div className='content'>
                {username} 님, 관람일이 일주일 남았어요!관람일이 일주일 남았어요!관람일이 일주일 남았어요!관람일이 일주일 남았어요!
            </div>
            <div className='footer'>
                ▶ 나의 축제 보러 가기
            </div>
            
        </div>
    )
}

export default TopTalkAreaList
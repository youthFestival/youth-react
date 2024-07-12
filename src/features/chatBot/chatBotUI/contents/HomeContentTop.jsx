import React from 'react'
import '../../styles/content-top.css'
import searchIcon from '../../icons/search-icon.svg'
const HomeContentTop = () => {
    return (
        <div className='content-top-container'>
            <div className='content-top-title'>자주 묻는 질문</div>
            <div className='search-bar'>
                <input type='text' placeholder='무엇이든 찾아보세요.' />
                <button>
                    <img src={searchIcon} alt="검색 아이콘" />
                </button>
            </div>
        </div>
    )
}

export default HomeContentTop
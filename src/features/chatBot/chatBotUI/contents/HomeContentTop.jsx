import React, { useState } from 'react'
import '../../styles/content-top.css'
import searchIcon from '../../icons/search-icon.svg'
const HomeContentTop = ({searchQuery, setSearchQuery}) => {
    const [thisQuery, setThisQuery] = useState('');

    const handleInputChange = (e) => {
        setThisQuery(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setSearchQuery(thisQuery);
        }
    }

    return (
        <div className='content-top-container'>
            <div className='content-top-title'>자주 묻는 질문</div>
            <div className='search-bar'>
                <input type='text' placeholder='무엇이든 찾아보세요.' value={thisQuery} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
                <button
                    onClick={(e) => setSearchQuery(thisQuery)}>
                    <img src={searchIcon} alt="검색 아이콘" />
                </button>
            </div>
        </div>
    )
}

export default HomeContentTop
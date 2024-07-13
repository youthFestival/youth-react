import React, { useState } from 'react'
import Top from './HomeContentTop'
import List from './HomeContentList'

const HomeContent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <Top searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <List searchQuery={searchQuery}/>
        </div>
    )
}

export default HomeContent;
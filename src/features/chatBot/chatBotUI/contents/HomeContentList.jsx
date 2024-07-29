import React, { useEffect, useState } from 'react';
import Item from './HomeContentListItem';
import axios from 'axios';
import '../../styles/content-list.css';
import unknown from '../../icons/unknown-document.svg';

const apiURL = process.env.REACT_APP_API_URL;

const HomeContentList = ({ searchQuery }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiURL}/faq`);
                const data = response.data;
                console.log(data);
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const itemFilter = (query) => {
        if (!query) {
            return items;
        }
        const lowerCaseQuery = query.toLowerCase();
        return items.filter(item => 
            (item.content && item.content.toLowerCase().includes(lowerCaseQuery)) ||
            (item.title && item.title.toLowerCase().includes(lowerCaseQuery))
        );
    };

    const itemFiltered = itemFilter(searchQuery);

    return (
        <div className="content-list-container">
            {itemFiltered.length > 0 ? (
                itemFiltered.map((item, index) => (
                    <Item
                        key={index}
                        question={item.title || 'Untitled'}
                        answer={item.content || ''}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))
            ) : (
                <div className='empty-search-container'>
                    <div className='item'>
                        <img src={unknown} alt="unknown-icon" />
                        <div className='normal-text'>
                            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '2px'}}>검색 결과가 없어요.</p>
                            <p>단어의 철자를 다시 확인해주세요.</p>
                            <p>또는 단어의 수를 줄이거나, 일반적인 검색어로 다시 검색해보세요.</p>
                        </div>
                    </div>
                </div>  
            )}
        </div>
    );
};

export default HomeContentList;

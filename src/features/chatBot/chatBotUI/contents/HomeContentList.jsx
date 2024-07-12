import React from 'react'
import Item from './HomeContentListItem'
import '../../styles/content-list.css'
const HomeContentList = () => {
    const items = [
        { question: '비밀번호는 어떻게 바꾸나요?', answer: '휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
        { question: 'Item 2', answer: 'This is the content for item 2.' },
        { question: 'Item 3', answer: 'This is the content for item 3.' },
        { question: 'Item 1', answer: 'This is the content for item 1.' },
        { question: 'Item 2', answer: 'This is the content for item 2.' },
        { question: 'Item 3', answer: 'This is the content for item 3.' },
        { question: 'Item 2', answer: 'This is the content for item 2.' },
        { question: 'Item 3', answer: 'This is the content for item 3.' },
        { question: 'Item 1', answer: 'This is the content for item 1.' },
        { question: 'Item 2', answer: 'This is the content for item 2.' },
        { question: 'Item 3', answer: 'This is the content for item 3.' },
        { question: 'Item 2', answer: 'This is the content for item 2.' },
        { question: 'Item 3', answer: 'This is the content for item 3.' },
        { question: 'Item 1', answer: 'This is the content for item 1.' },
        { question: 'Item 2', answer: 'This is the content for item 2.' },
        { question: 'Item 3', answer: 'This is the content for item 3.' },
    ];

    return (
        <div className='content-list-container'>
            {items.map((item, index) => (
                <Item key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    )
}

export default HomeContentList
import React, { useState } from 'react'
import Item from './HomeContentListItem'
import '../../styles/content-list.css'
import unknown from '../../icons/unknown-document.svg'
const HomeContentList = ({searchQuery}) => {
    const items = [
        { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf1 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
        { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf2 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
        { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf3 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
        { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf4 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
        { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf5 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
        { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf6 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
        { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf7 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
        { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf8 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
        { question: '비밀번호는 어떻게 바꾸나요?', answer: 'asdf9 휴대폰 간편결제 비밀번호를 변경하고 싶다면 네이버페이 주문/결제 페이지의 휴대폰 간편결제 창에서 비밀번호 변경을 클릭한 후 기존 비밀번호로 인증하고 새 비밀번호를 등록하면 됩※ 비밀번호가 타인에서 유출되지 않도록 주의해 주시고, 정기적으로 변경해 주세1. 일반결제 > 휴대폰 간편결제> 비밀번호 변경 클릭2. 기존 비밀번호 인증 후 새 비밀번호 등록' },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const itemFilter = (query) => {
        if (!query) {
            return items;
        }
        const lowerCaseQuery = query.toLowerCase();
        return items.filter(item => item.answer.toLowerCase().indexOf(lowerCaseQuery) !== -1);
    };

    const itemFiltered = itemFilter(searchQuery);

    return (
        <div className="content-list-container">
            {itemFiltered.length > 0 ? (
                itemFiltered.map((item, index) => (
                    <Item
                        key={index}
                        question={item.question}
                        answer={item.answer}
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
    )
}

export default HomeContentList
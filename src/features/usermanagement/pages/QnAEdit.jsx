import React from 'react';
import '../styles/qna-edit.scss';

/**
 * QnA 수정 폼
 */
const QnAEdit = ({ 
    myQnA = {}, // 기본값 설정
    handleInputChange, 
    categoryError 
}) => {
    const handleCategoryChange = (e) => {
        const { value } = e.target;
        handleInputChange(e);
    };

    return (
        <div className='qna-edit'>
            <div className='form'>
                <div className="QnA-modal-content">
                    <div className="QnA-modal-title">
                        <h2>문의하기</h2>
                    </div>
                    <form className="QnA-modal-form">
                        <table className="QnA-modal-table">
                            <tbody>
                                <tr>
                                    <td className="QnA-modal-label">문의유형</td>
                                    <td className="QnA-modal-input-cell">
                                        <select
                                            name="category"
                                            value={myQnA.category || '선택'}
                                            onChange={handleCategoryChange}
                                            className="QnA-modal-select"
                                            required
                                        >
                                            <option value="선택">선택</option>
                                            <option value="페스티벌">페스티벌</option>
                                            <option value="계정">계정</option>
                                        </select>
                                        {categoryError && <span className="error-text">* 카테고리를 선택해주세요.</span>}
                                    </td>
                                    <td className="QnA-modal-checkbox-cell" colSpan="2">
                                        <input
                                            type="checkbox"
                                            name="isSecret"
                                            checked={myQnA.isSecret || false}
                                            onChange={handleInputChange}
                                            className="QnA-modal-checkbox"
                                        />
                                        <label className='QnA-modal-label-secret'>비밀글로 문의하기</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="QnA-modal-label">축제이름</td>
                                    <td className="QnA-modal-input-cell" colSpan="3">
                                        <textarea
                                            name="content"
                                            value={myQnA.content || ''}
                                            onChange={handleInputChange}
                                            required
                                            className="QnA-modal-textarea"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="QnA-modal-label">제목</td>
                                    <td className="QnA-modal-input-cell" colSpan="3">
                                        <input
                                            type="text"
                                            name="title"
                                            value={myQnA.title || ''}
                                            onChange={handleInputChange}
                                            required
                                            className="QnA-modal-input"
                                        />
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td className="QnA-modal-label">문의내용</td>
                                    <td className="QnA-modal-input-cell" colSpan="3">
                                        <textarea
                                            name="content"
                                            value={myQnA.content || ''}
                                            onChange={handleInputChange}
                                            required
                                            className="QnA-modal-textarea"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="QnA-modal-buttons">
                            <button type="submit" className="QnA-modal-submit">등록</button>
                            <button type="button" className="QnA-modal-cancel">취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QnAEdit;

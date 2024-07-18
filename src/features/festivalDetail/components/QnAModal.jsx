import React from 'react';
import Modal from 'react-modal';
import '../styles/QnAModal.scss';

const QnAModal = ({ isOpen, onRequestClose, handleSubmit, newQnA, handleInputChange, categoryError }) => {
    const handleCategoryChange = (e) => {
        const { value } = e.target;
        handleInputChange(e);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="QnA 작성"
            className="QnA-modal"
            overlayClassName="overlay"
        >
            <div className="QnA-modal-content">
                <div className="QnA-modal-title">
                    <h2>문의하기</h2>
                </div>
                <form onSubmit={handleSubmit} className="QnA-modal-form">
                    <table className="QnA-modal-table">
                        <tbody>
                            <tr>
                                <td className="QnA-modal-label">문의유형</td>
                                <td className="QnA-modal-input-cell">
                                    <select name="category" value={newQnA.category} onChange={handleCategoryChange} className="QnA-modal-select" required>
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
                                        checked={newQnA.isSecret}
                                        onChange={handleInputChange}
                                        className="QnA-modal-checkbox"
                                    />
                                    <label className='QnA-modal-label-secret'>비밀글로 문의하기</label>
                                </td>
                            </tr>
                            <tr>
                                <td className="QnA-modal-label">제목</td>
                                <td className="QnA-modal-input-cell" colSpan="3">
                                    <input
                                        type="text"
                                        name="title"
                                        value={newQnA.title}
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
                                        value={newQnA.content}
                                        onChange={handleInputChange}
                                        required
                                        className="QnA-modal-textarea"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="QnA-modal-notice">
                        <p>※ 작성된 텍스트는 관리자의 검토를 거치게 됩니다.</p>
                        <p>※ 샘플 상세페이지에 공개되는 내용이므로 민감한 정보를 포함하지 않도록 주의해주시기 바랍니다.</p>
                        <p>※ 문의 내용에 따라 고객센터로 직접 전달될 수 있습니다. 이 경우, 별도의 알림 없이 처리될 수 있습니다.</p>
                        <p>※ 주문, 결제, 배송, AS 및 개인정보 관련 문의는 FAQ 또는 고객의 소리를 이용해 주시기 바랍니다.</p>
                    </div>
                    <div className="QnA-modal-buttons">
                        <button type="submit" className="QnA-modal-submit">등록</button>
                        <button type="button" onClick={onRequestClose} className="QnA-modal-cancel">취소</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default QnAModal;
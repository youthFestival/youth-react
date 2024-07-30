import React from 'react';
import Modal from 'react-modal';
import '../styles/comment-modal.scss';

const CommentModal = ({ isOpen, onRequestClose, handleSubmit, newComment, handleInputChange }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="기대평 작성"
            className="comment-modal"
            overlayClassName="comment-overlay"
        >
            <div className="comment-modal-content">
                <div className="comment-modal-title">
                    <h2>기대평 작성</h2>
                </div>
                <form onSubmit={handleSubmit} className="comment-modal-form">
                    <label className="comment-modal-label">
                        내용
                        <input
                            type="text"
                            name="content"
                            value={newComment.content}
                            onChange={handleInputChange}
                            required
                            className="comment-modal-input"
                        />
                    </label>
                    <div className="comment-modal-buttons">
                        <button type="submit" className="comment-modal-submit">등록</button>
                        <button type="button" onClick={onRequestClose} className="comment-modal-cancel">취소</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default CommentModal;
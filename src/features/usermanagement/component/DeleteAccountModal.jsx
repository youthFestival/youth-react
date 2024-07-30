import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/delete-account-modal.scss';

Modal.setAppElement('#root');

const DeleteAccountModal = ({ isOpen, onRequestClose, onDelete }) => {
    const [inputValue, setInputValue] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        if (e.target.value === '회원탈퇴를 하겠습니다') {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    };

    const handleDelete = () => {
        onDelete();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="회원 탈퇴 확인"
            className="delete-account-modal"
            overlayClassName="delete-account-overlay"
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">아래 문구를 입력 해주세요.</h2>
                    <p>"회원탈퇴를 하겠습니다"</p>
                </div>
                <div className="modal-body">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="회원탈퇴를 하겠습니다"
                        className="delete-account-input"
                    />
                </div>
                <div className="modal-footer">
                    <button
                        className="delete-account-modal-button delete-button"
                        onClick={handleDelete}
                        disabled={!isButtonEnabled}
                    >
                        탈퇴
                    </button>
                    <button
                        className="delete-account-modal-button cancel-button"
                        onClick={onRequestClose}
                    >
                        취소
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteAccountModal;
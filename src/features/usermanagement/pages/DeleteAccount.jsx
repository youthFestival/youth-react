import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import DeleteAccountModal from '../component/DeleteAccountModal';
import { AuthContext } from '../../../contexts/AuthContext';
import '../styles/delete-account.scss';

const DeleteAccount = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, dispatch } = useContext(AuthContext);
    const userId = user ? user.userId : null;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        try {
            console.log(userId);
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await fetch(`${apiUrl}/user/${userId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const result = await response.json();
                Swal.fire({
                    icon: 'success',
                    title: '회원 탈퇴 성공',
                    text: result.message,
                    confirmButtonColor: '#89CFF0',
                }).then(() => {
                    dispatch({ type: "LOGOUT" });
                    window.location.href = '/';
                });
            } else {
                const errorResult = await response.json();
                Swal.fire({
                    icon: 'error',
                    title: '회원 탈퇴 실패',
                    text: errorResult.message,
                    confirmButtonColor: '#89CFF0',
                });
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            Swal.fire({
                icon: 'error',
                title: '오류',
                text: '회원 탈퇴 중 오류가 발생했습니다. 다시 시도해주세요.',
                confirmButtonColor: '#89CFF0',
            });
        }
    };

    return (
        <div className="delete-account-container">
            <h1 className="delete-account-title">회원 탈퇴 안내</h1>
            <div className="delete-account-section" id="delete-account-procedure">
                <h2 className="delete-account-heading">1. 회원 탈퇴 절차</h2>
                <ul className="delete-account-list">
                    <li className="delete-account-list-item">탈퇴를 신청하면 즉시 회원 정보가 삭제됩니다.</li>
                    <li className="delete-account-list-item">탈퇴 후에는 동일한 이메일로 재가입이 가능합니다.</li>
                </ul>
            </div>
            <div className="delete-account-section" id="delete-account-cautions">
                <h2 className="delete-account-heading">2. 탈퇴 시 주의사항</h2>
                <ul className="delete-account-list">
                    <li className="delete-account-list-item">회원 탈퇴 시 회원님의 모든 개인 정보 및 데이터가 영구적으로 삭제됩니다.</li>
                    <li className="delete-account-list-item">삭제된 데이터는 복구할 수 없습니다.</li>
                    <li className="delete-account-list-item">진행 중인 서비스 이용 내역이 있는 경우, 해당 내역도 함께 삭제됩니다.</li>
                </ul>
            </div>
            <div className="delete-account-section" id="delete-account-after">
                <h2 className="delete-account-heading">3. 회원 탈퇴 후</h2>
                <ul className="delete-account-list">
                    <li className="delete-account-list-item">회원 탈퇴가 완료되면, 더 이상 서비스를 이용하실 수 없습니다.</li>
                    <li className="delete-account-list-item">필요시 언제든지 다시 가입하여 서비스를 이용할 수 있습니다.</li>
                </ul>
            </div>
            <div className="delete-account-section" id="delete-account-inquiries">
                <h2 className="delete-account-heading">4. 문의사항</h2>
                <ul className="delete-account-list">
                    <li className="delete-account-list-item">회원 탈퇴와 관련하여 궁금한 점이 있으시면 1:1 문의로 연락해 주세요.</li>
                </ul>
            </div>
            <div className="delete-account-section" id="delete-account-application">
                <h2 className="delete-account-heading">5. 탈퇴 신청</h2>
                <ul className="delete-account-list">
                    <li className="delete-account-list-item">[탈퇴하기] 버튼을 클릭하여 탈퇴 절차를 진행해 주세요.</li>
                </ul>
            </div>
            <div className="delete-account-button-container">
                <button className="delete-account-button" onClick={openModal}>탈퇴하기</button>
            </div>
            <DeleteAccountModal 
                isOpen={isModalOpen} 
                onRequestClose={closeModal} 
                onDelete={handleDelete} 
            />
        </div>
    );
};

export default DeleteAccount;
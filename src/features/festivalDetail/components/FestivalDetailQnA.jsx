import React, { useEffect, useState, useCallback, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import QnAModal from './QnAModal';
import "../styles/festival-detail-qna.css";
import Spinner from '../../../components/spinner/Spinner';

const FestivalDetailQnA = ({ festivalId }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [qnaList, setQnaList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [filter, setFilter] = useState('전체');
    const [excludeSecret, setExcludeSecret] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newQnA, setNewQnA] = useState({ title: '', content: '', category: '선택', isSecret: false });
    const [categoryError, setCategoryError] = useState(false);
    const [expandedQnAId, setExpandedQnAId] = useState(null);

    const qnaPerPage = 10;
    const maxVisibleButtons = 10;

    const fetchQnA = useCallback(async (page) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/inquiry`, {
                params: {
                    festivalId,
                    page,
                }
            });
            console.log(response.data);
            setQnaList(response.data.inquiries || []);
        } catch (error) {
            setError('QnA 정보를 가져오는데 실패했습니다.');
        } finally {
            setLoading(false);
        }
    }, [festivalId]);

    useEffect(() => {
        fetchQnA(currentPage);
    }, [festivalId, currentPage, fetchQnA]);

    useEffect(() => {
        setCurrentPage(0);
    }, [filter, excludeSecret]);

    const formatUsername = (username) => {
        if (!username) return '';
        return username.slice(0, -4) + '****';
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getVisiblePageNumbers = () => {
        const startPage = Math.floor(currentPage / maxVisibleButtons) * maxVisibleButtons;
        return Array.from({ length: Math.min(maxVisibleButtons, totalPages - startPage) }, (_, index) => startPage + index);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleExcludeSecretChange = () => {
        setExcludeSecret(!excludeSecret);
    };

    const filteredQnaList = qnaList.filter(qna => {
        if (filter !== '전체' && qna.status !== filter) return false;
        if (excludeSecret && qna.secret) return false;
        return true;
    });

    const totalPages = Math.ceil(filteredQnaList.length / qnaPerPage);

    const openModal = () => {
        if (!user) {
            Swal.fire({
                title: '로그인이 필요합니다.',
                text: '로그인 페이지로 이동합니다.',
                icon: 'warning',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'custom-confirm-button'
                }
            }).then(() => {
                navigate('/login');
            });
            return;
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setNewQnA({ title: '', content: '', category: '선택', isSecret: false });
        setCategoryError(false);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewQnA(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (name === 'category' && value !== '선택') {
            setCategoryError(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newQnA.category === '선택') {
            setCategoryError(true);
            return;
        }
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const data = {
                title: newQnA.title,
                content: newQnA.content,
                category: newQnA.category,
                isSecret: newQnA.isSecret,
                festivalId: parseInt(festivalId, 10),
                updatedAt: new Date().toISOString()
            };
            console.log('Data being sent:', data);
            await axios.post(`${apiUrl}/inquiry`, data, { withCredentials: true });
            Swal.fire({
                title: '성공!',
                text: 'QnA가 등록되었습니다.',
                icon: 'success',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'custom-confirm-button'
                }
            }).then(async () => {
                closeModal();
                await fetchQnA(currentPage);
                window.location.reload();
            });
        } catch (error) {
            Swal.fire({
                title: '실패!',
                text: 'QnA 등록에 실패했습니다.',
                icon: 'error',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'custom-confirm-button'
                }
            });
            console.error('QnA 등록에 실패했습니다.', error);
        }
    };

    const toggleQnA = (id) => {
        setExpandedQnAId(prevId => (prevId === id ? null : id));
    };

    if (loading) return <Spinner/>;
    if (error) return <p>{error}</p>;

    return (
        <div className="qna-container">
            <div className='qna-buttons'>
                <div className="qna-filter-container-left">
                    <button className={`qna-filter-button ${filter === '전체' ? 'active' : ''}`} onClick={() => handleFilterChange('전체')}>전체<span className="qna-filter-count">{qnaList.length}</span></button>
                    <button className={`qna-filter-button ${filter === '답변완료' ? 'active' : ''}`} onClick={() => handleFilterChange('답변완료')}>답변완료<span className="qna-filter-count">{qnaList.filter(qna => qna.status === '답변완료').length}</span></button>
                    <button className={`qna-filter-button ${filter === '접수중' ? 'active' : ''}`} onClick={() => handleFilterChange('접수중')}>접수중<span className="qna-filter-count">{qnaList.filter(qna => qna.status === '접수중').length}</span></button>
                    <button className={`qna-filter-button ${filter === '접수완료' ? 'active' : ''}`} onClick={() => handleFilterChange('접수완료')}>접수완료<span className="qna-filter-count">{qnaList.filter(qna => qna.status === '접수완료').length}</span></button>
                </div>
                <div className="qna-filter-container-right">
                    <input
                        type="checkbox"
                        id="exclude-secret"
                        className='secret-checkbox'
                        checked={excludeSecret}
                        onChange={handleExcludeSecretChange}
                    />
                    <label htmlFor="exclude-secret" className='exclude-secret-label'>비밀글 제외</label>
                    <button className="qna-btn" onClick={openModal}>Q&A 작성하기</button>
                </div>
            </div>
            <table className="qna-table">
                <thead className="qna-table-head">
                    <tr>
                        <th className="qna-table-header">답변상태</th>
                        <th className="qna-table-header">제목</th>
                        <th className="qna-table-header">작성자</th>
                        <th className="qna-table-header">작성일</th>
                    </tr>
                </thead>
                <tbody className="qna-table-body">
                    {filteredQnaList.slice(currentPage * qnaPerPage, (currentPage + 1) * qnaPerPage).map((qna) => (
                        <React.Fragment key={qna.id}>
                            <tr onClick={() => !qna.secret && toggleQnA(qna.id)}>
                                <td className="qna-table-cell">{qna.status}</td>
                                <td className={`qna-table-cell ${qna.secret ? 'secret-title' : 'clickable-title'}`} id='qna-title'>{qna.secret ? "비밀글 입니다." : qna.title}</td>
                                <td className="qna-table-cell">{formatUsername(qna.username)}</td>
                                <td className="qna-table-cell">{formatDate(qna.updatedAt)}</td>
                            </tr>
                            {expandedQnAId === qna.id && (
                                <tr>
                                    <td colSpan="4" className="qna-content-wrapper">
                                        <div className="qna-content">
                                            <p><span className="ni-eun">-</span> {qna.content}</p>
                                            {qna.reply && (
                                                <div className="qna-reply">
                                                    <p><strong>{qna.reply.title}</strong></p>
                                                    <p>{qna.reply.content}</p>
                                                    <p className="qna-reply-username">{formatUsername(qna.reply.username)}</p>
                                                    <p className="qna-reply-date">{formatDate(qna.reply.updatedAt)}</p>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {currentPage > 0 && (
                    <span className='pagination-button-move material-symbols-outlined' onClick={() => handlePageChange(currentPage - 1)}>
                        keyboard_arrow_left
                    </span>
                )}
                {getVisiblePageNumbers().map(pageNumber => (
                    <button
                        key={pageNumber}
                        className="pagination-button"
                        onClick={() => handlePageChange(pageNumber)}
                        disabled={pageNumber === currentPage}
                    >
                        {pageNumber + 1}
                    </button>
                ))}
                {currentPage < totalPages - 1 && (
                    <span className='pagination-button-move material-symbols-outlined' onClick={() => handlePageChange(currentPage + 1)}>
                        keyboard_arrow_right
                    </span>
                )}
            </div>
            <QnAModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                handleSubmit={handleSubmit}
                newQnA={newQnA}
                handleInputChange={handleInputChange}
                categoryError={categoryError}
            />
        </div>
    );
};

export default FestivalDetailQnA;
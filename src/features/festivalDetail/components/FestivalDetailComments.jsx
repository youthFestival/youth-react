import React, { useEffect, useState, useCallback, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../../../contexts/AuthContext';
import CommentModal from './CommentModal';
import "../styles/festival-comment.css";
import Spinner from '../../../components/spinner/Spinner';

const FestivalDetailComments = ({ festivalId }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newComment, setNewComment] = useState({ content: '' });

    const commentsPerPage = 10;
    const maxVisibleButtons = 10;

    const fetchComments = useCallback(async (page) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/comment/${festivalId}?limit=${commentsPerPage}&offset=${page * commentsPerPage}`);
            setComments(response.data.comments);
            setTotalPages(Math.ceil(response.data.total / commentsPerPage));
        } catch (error) {
            setError('댓글 정보를 가져오는데 실패했습니다.');
        } finally {
            setLoading(false);
        }
    }, [festivalId]);

    useEffect(() => {
        fetchComments(currentPage);
    }, [festivalId, currentPage, fetchComments]);

    const formatUsername = (username) => {
        if (!username) return '****'; // 기본 값으로 '****' 반환
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
        setNewComment({ content: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            await axios.post(`${apiUrl}/comment`, {
                festivalId,
                content: newComment.content
            }, { withCredentials: true });
            Swal.fire({
                title: '성공!',
                text: '댓글이 등록되었습니다.',
                icon: 'success',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'custom-confirm-button'
                }
            }).then(async () => {
                closeModal();
                await fetchComments(currentPage);
                window.location.reload();
            });
        } catch (error) {
            Swal.fire({
                title: '실패!',
                text: '댓글 등록에 실패했습니다.',
                icon: 'error',
                confirmButtonText: '확인',
                customClass: {
                    confirmButton: 'custom-confirm-button'
                }
            });
            console.error('댓글 등록에 실패했습니다.', error);
        }
    };

    if (loading) return <Spinner />;
    if (error) return <p>{error}</p>;

    return (
        <div className="comments-container">
            <div className="comments-btn-container">
                <button className="comments-btn" onClick={openModal}>기대평 작성하기</button>
            </div>
            <table className="comments-table">
                <thead className="comments-table-head">
                    <tr>
                        <th className="comments-table-header">번호</th>
                        <th className="comments-table-header">내용</th>
                        <th className="comments-table-header">작성자</th>
                        <th className="comments-table-header">작성일</th>
                    </tr>
                </thead>
                <tbody className="comments-table-body">
                    {comments.map((comment, index) => (
                        <tr key={comment.id}>
                            <td className="comments-table-cell">{currentPage * commentsPerPage + index + 1}</td>
                            <td className="comments-table-cell" id='comment-content'>{comment.content}</td>
                            <td className="comments-table-cell">{formatUsername(comment.username)}</td>
                            <td className="comments-table-cell">{formatDate(comment.updatedAt)}</td>
                        </tr>
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
            <CommentModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                handleSubmit={handleSubmit}
                newComment={newComment}
                handleInputChange={handleInputChange}
            />
        </div>
    );
};

export default FestivalDetailComments;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/festival-detail.css";

const FestivalDetailComments = ({ festivalId }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const commentsPerPage = 10;
    const maxVisibleButtons = 10;

    useEffect(() => {
        const fetchComments = async (page) => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}/comments/${festivalId}?limit=${commentsPerPage}&offset=${page * commentsPerPage}`);
                setComments(response.data.comments);
                setTotalPages(Math.ceil(response.data.total / commentsPerPage));
            } catch (error) {
                setError('댓글 정보를 가져오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchComments(currentPage);
    }, [festivalId, currentPage]);

    const formatUsername = (username) => {
        return username.slice(0, -4) + '****';
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getVisiblePageNumbers = () => {
        const startPage = Math.floor(currentPage / maxVisibleButtons) * maxVisibleButtons;
        return Array.from({ length: Math.min(maxVisibleButtons, totalPages - startPage) }, (_, index) => startPage + index);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="comments-container">
            <div className="comments-btn-container">
                <button className="comments-btn">기대평 작성하기</button>
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
                            <td className="comments-table-cell">{comment.updatedAt}</td>
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
        </div>
    );
};

export default FestivalDetailComments;

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/qna.scss';
import useFetch from '../../../hooks/useFetch';

/**
 * 내 기대평 컴포넌트
 * @returns {JSX.Element}
 */
const Comment = () => {
    const [inquiries, setInquiries] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [page, setPage] = useState(0);

    const navigate = useNavigate();
    const commentPerPage = 10;
    const maxVisibleButtons = 10;
    const totalPages = Math.ceil(inquiries?.length / commentPerPage);

    const { data, loading, error } = useFetch(`${process.env.REACT_APP_API_URL}/my-comment?limit=${commentPerPage}&offset=${page * commentPerPage}`);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

    const getVisiblePageNumbers = () => {
        const startPage = Math.floor(currentPage / maxVisibleButtons) * maxVisibleButtons;
        return Array.from({ length: Math.min(maxVisibleButtons, totalPages - startPage) }, (_, index) => startPage + index);
    };

    const fetchComments = useCallback(async (page) => {
        setInquiries(data?.inquiries);
        console.log(data?.inquiries);
    }, [data]);

    useEffect(() => {
        fetchComments(currentPage);
        console.log(currentPage);
    }, [currentPage, fetchComments]);

    const goWriteHandler = () => {
        navigate('/mydetail/edit-comment');
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="my-qna">
            <div className="qna-container">
                <table className="qna-table">
                    <thead className="qna-table-head">
                        <tr>
                            <th className="qna-table-header">번호</th>
                            <th className="qna-table-header">축제 이름</th>
                            <th className="qna-table-header">내용</th>
                            <th className="qna-table-header">작성 날짜</th>
                            <th className="qna-table-header">수정</th>
                            <th className="qna-table-header">삭제</th>
                        </tr>
                    </thead>
                    <tbody className="qna-table-body">
                        {inquiries?.slice(currentPage * commentPerPage, (currentPage + 1) * commentPerPage).map((inquiry, index) => (
                            <tr key={inquiry.id}>
                                <td className="qna-table-cell">{currentPage * commentPerPage + index + 1}</td>
                                <td className="qna-table-cell">{inquiry.festivalName}</td>
                                <td className="qna-table-cell">{inquiry.content}</td>
                                <td className="qna-table-cell">{formatDate(inquiry.updatedAt)}</td>
                                <td className="qna-table-cell">
                                    <button className="edit-button" onClick={goWriteHandler}>수정</button>
                                </td>
                                <td className="qna-table-cell">
                                    <button className="delete-button" onClick={goWriteHandler}>삭제</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                {currentPage > 0 && (
                    <span className="pagination-button-move material-symbols-outlined" onClick={() => handlePageChange(currentPage - 1)}>
                        keyboard_arrow_left
                    </span>
                )}
                {getVisiblePageNumbers().map((pageNumber) => (
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
                    <span className="pagination-button-move material-symbols-outlined" onClick={() => handlePageChange(currentPage + 1)}>
                        keyboard_arrow_right
                    </span>
                )}
            </div>
        </div>
    );
};

export default Comment;

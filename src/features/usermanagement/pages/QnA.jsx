import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/qna.scss'

/**
 * 내 QnA
 * @param {*} festivalId 
 * @returns 
 */
const QnA = (festivalId) => {

    const [qnaList, setQnAList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    const navigate = useNavigate();

    const qnaPerPage = 10;
    const maxVisibleButtons = 10;

    const totalPages = Math.ceil(qnaList.length / qnaPerPage);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

    const getVisiblePageNumbers = () => {
        const startPage = Math.floor(currentPage / maxVisibleButtons) * maxVisibleButtons;
        return Array.from({ length: Math.min(maxVisibleButtons, Math.ceil(qnaList.length / qnaPerPage) - startPage) }, (_, index) => startPage + index);
    };

    const fetchQna = useCallback(async (page) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/qna/${festivalId}?limit=${qnaPerPage}&offset=${page * qnaPerPage}`);
            console.log(response.data);
            setQnAList(response.data.qnaList || []);
        } catch (error) {
            setError('내 QnA 정보를 가져오는데 실패했습니다.');
        } finally {
            setLoading(false);
        }
    }, [festivalId]);

    useEffect(() => {
        fetchQna(currentPage);
    }, [festivalId, currentPage, fetchQna]);

    const goWriteHandler = () => {
        navigate('/mydetail/edit-qna');
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="my-qna">

            <div className='qna-container'>
                <table className="qna-table">
                    <thead className="qna-table-head">
                        
                        <tr>
                            <th className="qna-table-header">축제 이름</th>
                            <th className='qna-table-header'>제목</th>
                            <th className="qna-table-header">내용</th>
                            <th className="qna-table-header">작성 날짜</th>
                            <th className="qna-table-header">상태</th>
                            <th className="qna-table-header">수정</th>
                            <th className="qna-table-header">삭제</th>
                        </tr>
                    </thead>
                    <tbody className="qna-table-body">
                        {qnaList.slice(currentPage * qnaPerPage, (currentPage + 1) * qnaPerPage).map((qna) => (
                                    <tr key={qna.id}>
                                        <td className="qna-table-cell">{qna.festivalName}</td>
                                        <td className="qna-table-cell">{qna.title}</td>
                                        <td className="qna-table-cell">{qna.content}</td>
                                        <td className="qna-table-cell">{formatDate(qna.create)}</td>
                                        <td className="qna-table-cell">{qna.status}</td> 
                                    
                                        <td className="qna-table-cell">
                                            <button className='edit-button' onClick={goWriteHandler}>수정</button>
                                        </td>

                                        <td className="qna-table-cell">
                                            <button className='delete-button' onClick={goWriteHandler}>삭제</button>
                                        </td>
                                    </tr>
                        ))}
                    </tbody>
                </table>
               

            </div> 
            
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

export default QnA;
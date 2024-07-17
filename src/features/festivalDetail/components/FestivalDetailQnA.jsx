import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/festival-detail.css";

const FestivalDetailQnA = ({ festivalId }) => {
    const [qnaList, setQnaList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [filter, setFilter] = useState('전체');
    const [excludeSecret, setExcludeSecret] = useState(false);

    const qnaPerPage = 10;
    const maxVisibleButtons = 10;

    const fetchQnA = async (page) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/inquiries2/${festivalId}?limit=${qnaPerPage}&offset=${page * qnaPerPage}`);
            console.log(response.data);
            setQnaList(response.data.qnaList || []);
        } catch (error) {
            setError('QnA 정보를 가져오는데 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQnA(currentPage);
    }, [festivalId, currentPage]);

    useEffect(() => {
        setCurrentPage(0);
    }, [filter, excludeSecret]);

    const formatUsername = (username) => {
        return username.slice(0, -4) + '****';
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getVisiblePageNumbers = () => {
        const startPage = Math.floor(currentPage / maxVisibleButtons) * maxVisibleButtons;
        return Array.from({ length: Math.min(maxVisibleButtons, Math.ceil(filteredQnaList.length / qnaPerPage) - startPage) }, (_, index) => startPage + index);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleExcludeSecretChange = () => {
        setExcludeSecret(!excludeSecret);
    };

    const filteredQnaList = qnaList.filter(qna => {
        if (filter !== '전체' && qna.status !== filter) return false;
        if (excludeSecret && qna.isSecret) return false;
        return true;
    });

    const totalPages = Math.ceil(filteredQnaList.length / qnaPerPage);

    if (loading) return <p>Loading...</p>;
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
                    <button className="qna-btn">Q&A 작성하기</button>
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
                        <tr key={qna.id}>
                            <td className="qna-table-cell">{qna.status}</td>
                            <td className={`qna-table-cell ${qna.isSecret ? 'secret-title' : ''}`} id='qna-title'>{qna.isSecret ? "비밀글 입니다." : qna.title}</td>
                            <td className="qna-table-cell">{formatUsername(qna.username)}</td>
                            <td className="qna-table-cell">{qna.create}</td>
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

export default FestivalDetailQnA;
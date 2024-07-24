import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/inquiries-list.scss';

const InquiriesList = ({festivalId}) => {

    const [inqList, setInqList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    const navigate = useNavigate();

    const inqPerPage = 10;
    const maxVisibleButtons = 10;

    const totalPages = Math.ceil(inqList.length / inqPerPage);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

    const getVisiblePageNumbers = () => {
        const startPage = Math.floor(currentPage / maxVisibleButtons) * maxVisibleButtons;
        return Array.from({ length: Math.min(maxVisibleButtons, Math.ceil(inqList.length / inqPerPage) - startPage) }, (_, index) => startPage + index);
    };

    const fetchInq = useCallback(async (page) => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/inquiries2/${festivalId}?limit=${inqPerPage}&offset=${page * inqPerPage}`);
            console.log(response.data);
            setInqList(response.data.inqList || []);
        } catch (error) {
            setError('1:1 문의 정보를 가져오는데 실패했습니다.');
        } finally {
            setLoading(false);
        }
    }, [festivalId]);

    useEffect(() => {
        fetchInq(currentPage);
    }, [festivalId, currentPage, fetchInq]);

    const goWriteHandler = () => {
        navigate('/mydetail/inquiries');
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='mydetail-inquiries'>
            <div className='inq-button-container'>
                <button className='inq-button' onClick={goWriteHandler}>문의 작성하기</button>
            </div>
            <table className="inq-table">
                <thead className="inq-table-head">
                    <tr>
                        <th className="inq-table-header">구분</th>
                        <th className='inq-table-header'>축제 이름</th>
                        <th className="inq-table-header">제목</th>
                        <th className="inq-table-header">문의 날짜</th>
                        <th className="inq-table-header">상태</th>
                    </tr>
                </thead>
                <tbody className="inq-table-body">
                    {inqList.slice(currentPage * inqPerPage, (currentPage + 1) * inqPerPage).map((inquiries) => (
                        <React.Fragment key={inquiries.id}>
                            <tr>
                                <td className="inq-table-cell">{inquiries.category}</td>
                                <td className="inq-table-cell">{inquiries.festivalName}</td>
                                <td className="inq-table-cell">{inquiries.title}</td>
                                <td className="inq-table-cell">{formatDate(inquiries.create)}</td>
                                <td className="inq-table-cell">{inquiries.status}</td>
                            </tr>
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
        </div>
    );
};

export default InquiriesList;
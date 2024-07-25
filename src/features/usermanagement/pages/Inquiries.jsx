import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import '../styles/inquiries.scss'

const Inquiries = () => {

    const [value, setValue] = useState("");

    const navigate = useNavigate();

    const goSaveHandler = () => {
        navigate('/mydetail/inquiries-save');
    }

    return (
        <div className='mydetail-inquiries'>
             <>

                <div className="editor">
                    <div className="title">
                        <label>축제 이름</label>
                        <input type="text" className="title-text" placeholder="축제 이름을 입력하세요" />
                    </div>
                    <div className="title">
                        <label>제목</label>
                        <input type="text" className="title-text" placeholder="제목을 입력하세요" />
                    </div>
                    

                    <ReactQuill theme="snow" value={value} onChange={setValue}  className='write'/>

                    <div className='container'>
                        <button className="btn" onClick={goSaveHandler}>보관함</button>
                        <button className="btn">등록하기</button>
                    </div> 
                </div>

            </>

        </div>
    );
};

export default Inquiries;
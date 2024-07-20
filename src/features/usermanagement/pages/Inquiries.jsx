import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import '../styles/inquiries.scss'
const Inquiries = () => {

    const [value, setValue] = useState("");

    return (
        <div className='mydetail-inquiries'>
             <>

                <div className="editor">
                    <div className="title">
                        <label>제목</label>
                        <input type="text" placeholder="제목을 입력하세요" />
                    </div>


                    <ReactQuill theme="snow" value={value} onChange={setValue}  className='write'/>

                    <button className="btn">등록하기</button>
                </div>

            </>

        </div>
    );
};

export default Inquiries;
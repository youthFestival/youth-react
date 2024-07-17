import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import "../styles/post-editor.scss"
function PostEditor() {
    const [value, setValue] = useState("");

    return (
        <>

            <div className="editor">
                <div className="title">
                    <label>제목</label>
                    <input type="text" placeholder="제목을 입력하세요" />
                </div>


                <ReactQuill theme="snow" value={value} onChange={setValue} />

                <button className="btn">등록하기</button>
            </div>

        </>
    )
}

export default PostEditor;
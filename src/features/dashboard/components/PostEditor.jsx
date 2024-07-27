import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import "../styles/post-editor.scss"
import axios from "axios";
import { removeHtmlTags } from "../../../utils/util";
/**
 * 게시글 작성 에디터
 *  defaultValues(수정모드일 경우 전달할 객체 ) <br>
 *  defaultValues: {
 *      title : 수정할 게시글 제목
 *     content : 수정할 게시글 내용
 *  }
 * replyTo : 답변글 작성시 답변할 게시글 id
 * festivalId : 페스티벌 문의글 작성시 페스티벌 id 
 * @returns 
 */
function PostEditor({ defaultValues = { title: "", content: "" }, replyTo = null, festivalId = null }) {
    const [value, setValue] = useState(""); // 에디터 내용부분에 해당하는 부분
    const ref = useRef();

    const { title = "", content = "" } = defaultValues;

    useEffect(() => {
        if (defaultValues) {
            ref.current.value = title;
            setValue(content);
        }
    }, []);


    const createInquiry = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const res = await axios.post(
                `${apiUrl}/inquiry`,
                {
                    title: ref.current.value,
                    content: removeHtmlTags(removeHtmlTags(value)),
                    festivalId: festivalId,
                    replyId: replyTo,
                },
                { withCredentials: true }
            );
            alert(res.data?.message || "작성되었습니다.");
            window.location.reload();
        } catch (err) {
            alert(err?.response?.data.message || "Inquiry 작성 실패 오류");
            console.log(err);
        }
    };




    return (
        <>

            <div className="editor">
                <div className="title">
                    <label>제목</label>
                    <input type="text" placeholder="제목을 입력하세요" ref={ref} />
                </div>


                <ReactQuill theme="snow" value={value} onChange={setValue} />

                <button className="btn" onClick={createInquiry}>등록하기</button>
                {/* <button className="btn">수정하기</button> */}
            </div>

        </>
    )
}

export default PostEditor;
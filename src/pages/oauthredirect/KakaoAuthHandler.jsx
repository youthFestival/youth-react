import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Spinner from "../../components/spinner/Spinner";

const KakaoAuthHandler = () => {
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [success, setSuccess] = useState(false);

useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    //console.log(code);
    if (code) {
    const sendCodeToBackend = async (code) => {
        try {
        const response = await axios.post("서버URL/엔드포인트 넣어야함", {
            code: code,
        });
        console.log("백엔드 응답:", response.data);
        setSuccess(true);
        } catch (err) {
        console.error("카카오 로그인 처리 오류:", err);
        setError("카카오 로그인 처리 중 오류가 발생했습니다.");
        } finally {
        setLoading(false);
        }
    };

    sendCodeToBackend(code);
    } else {
    setLoading(false);
    setError("카카오 인가 코드를 받지 못했습니다.");
    }
}, []);

if (loading) {
    return (
    <Wrap>
        <Spinner />
    </Wrap>
    );
}

if (error) {
    return (
    <Wrap>
        <p>{error}</p>
    </Wrap>
    );
}

if (success) {
    return (
    <Wrap>
        <p>카카오 로그인 처리가 완료되었습니다.</p>
        {/* 필요한 추가 작업 (예: 리디렉션) */}
    </Wrap>
    );
}

return null;
};

const Wrap = styled.div`
margin-top: 50px;
min-height: 1100px;
`;

export default KakaoAuthHandler;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Spinner from "../components/spinner/Spinner";

const apiURL = process.env.REACT_APP_API_URL;

const RedirectURI = () => {
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    const popup = window.opener;
    if (popup && popup.service) {
      setService(popup.service);
    }
    const sendCodeToBackend = async (code) => {
      try {
        const response = await axios.post(`${apiURL}/auth/${service}`, {
          code: code,
        });
        console.log("백엔드 응답:", response.data);
        // 요청이 성공하면 메인 페이지로 이동
        navigate("/main");
      } catch (error) {
        console.error("로그인 처리 중 오류가 발생했습니다:", error);
        // 오류 처리 로직을 여기에 추가할 수 있습니다.
      }
    };

    // 백엔드로 코드값을 넘겨주는 로직
    let code = new URL(window.location.href).searchParams.get("code");
    console.log(code);

    if (code) {
      sendCodeToBackend(code);
    }
  }, [navigate]);

  return (
    <Wrap>
      {/* 로그인중이라는 것을 표시할 수 있는 로딩중 화면 */}
      <img src={Spinner} alt="로딩" width="10%" />
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RedirectURI;

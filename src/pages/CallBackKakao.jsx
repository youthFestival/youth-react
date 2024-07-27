import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Spinner from "../components/spinner/Spinner";
import { AuthContext } from "../contexts/AuthContext";

const apiURL = process.env.REACT_APP_API_URL;

const CallBackKakao = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  useEffect(() => {
    const handleKakaoLogin = async () => {
      // console.log(code);
      try {
        const response = await axios.get(`${apiURL}/auth/kakao/?code=${code}`);
        dispatch({ type: "LOGIN", payload: response.data.user });
        navigate("/");
      } catch (error) {
        alert("카카오 로그인에 실패하였습니다.");
        navigate("/login");
      }
    };
    handleKakaoLogin();
  }, [dispatch, navigate, code]);

  return (
    <Wrap>
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

export default CallBackKakao;

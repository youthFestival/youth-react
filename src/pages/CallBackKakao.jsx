import styled from "styled-components";
import axios from "axios";
import Spinner from "../components/spinner/Spinner";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const KAKAO_TOKEN_URL = "https://kauth.kakao.com/oauth/token";

const CallBackKakao = () => {
  const { user, dispatch } = useContext(AuthContext);
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  console.log(code);


  /// 토큰 받아오기
  const getToken = async () => {
    try {
      const response = await axios.post(KAKAO_TOKEN_URL, null, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        params: {
          code: code,
          client_secret: process.env.REACT_APP_KAKAO_CLIENT_SECRET,
          redirect_uri: "http://localhost:3000/oauth/kakao",
          client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
          grant_type: "authorization_code"
        }
      });
      console.log(response.data);
      return response.data;

    } catch (error) {
      alert("토큰 인가 오류 (콘솔을 참조)")
      console.log(error);
      return;

    }
  };

  // 사용자 정보 받아오기

  const getUserData = async (data) => {
    try {
      const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${data.access_token}`
        }
      })

      console.log(response.data);
      return response.data;

    } catch (error) {
      alert("토큰을 이용해 서버에 정보 요청 실패 (콘솔을 참조)")
      console.log(error);
      return;

    }
  }

  // 스프링 서버로 로그인 요청 보내기
  const loginToServer = async (user) => {
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + "/auth/kakao-login", {
        id: user.id,
        profileName: user?.properties.nickname,
      })

      return response.data;
    }
    catch (error) {
      console.log(error);
      alert("스프링 서버 로그인 실패 (콘솔을 참조)")
      return;
    }
  }


  // 로그인 요청 보내기
  useEffect(() => {

    // 1. 로그인해서 얻은 "코드"로 토큰을 받아오기
    getToken().then(
      (data) => {
        // 2. "토큰"을 이용해서 사용자 정보 받아오기
        getUserData(data).then((user) => {
          console.log(data);
          // 3. 스프링 서버로 로그인 요청 보내기
          loginToServer(user).then((response) => {
            if (response.user != null) {
              alert(response?.message);

              dispatch({ type: "LOGIN", payload: response?.user });
            }
            navigate('/');
          });
        });
      }).catch((error) => {
        console.log(error);
        alert("로그인 실패 (콘솔을 참조)")
        navigate('/');
      });

  }, []);

  return (
    <>

    </>
  );
}

export default CallBackKakao;

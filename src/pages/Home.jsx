import axios from "axios";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
const navLinkStyle = {
  textDecoration: "none",
  color: "white",
  padding: "10px",
  margin: "5px",
  borderRadius: "5px",
  background: "#4A95FF",
  fontWeight: "bold",
};

function Home() {
  const userIdInputRef = useRef();
  const [token, setToken] = useState(null);
  const testLoginLogic = async (e) => {

    try {
      const response = await axios.post(process.env.REACT_APP_API_URL + "/login", {
        userId: userIdInputRef.current.value,
        password: "1234"
      }, { withCredentials: true });
      setToken(response.data.token);
      alert(response.data.message);

    } catch (e) {
      alert("로그인 실패 콘솔을 참조해주세요.\n 아래는 응답 데이터입니다.\n" + JSON.stringify(e?.response.data, null, 2));
      console.log(e);
    }



  };


  return (
    <center style={{ marginTop: "200px" }}>
      <img
        src="youthfavicon.png"
        width={"200px"}
        height={"200px"}
        alt={"youth logos"}
      />
      <h1>Youth 24시간 영업중</h1>
      <NavLink to="/calendar" style={navLinkStyle}>
        Calendar
      </NavLink>
      <NavLink to="/login" style={navLinkStyle}>
        Login
      </NavLink>
      <NavLink to="/mypage" style={navLinkStyle}>
        My
      </NavLink>
      <NavLink to="/admin" style={navLinkStyle}>
        Admin
      </NavLink>


      <p style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
      }}>
        <h2>로그인 테스트입니다.</h2>
        <p>아이디가 admin일 경우 성공합니다.</p>
        <input type="text" ref={userIdInputRef} placeholder="아이디를 입력해주세요" />
        <button onClick={testLoginLogic} >로그인 테스트</button>
        <h3>token : {!token ? "토큰이 존재하지 않습니다." : token}</h3>
      </p>
    </center>
  );
}

export default Home;

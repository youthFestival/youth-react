import axios from "axios";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { sendRequest } from "../services/axios-service";
const navLinkStyle = {
  textDecoration: "none",
  color: "white",
  padding: "10px",
  margin: "5px",
  borderRadius: "5px",
  background: "#4A95FF",
  fontWeight: "bold",
};

function TempMain() {
  const selectRef = useRef();
  const urlRef = useRef();
  const payloadRef = useRef();

  /** 웹 요청 테스트 */
  const handleRequest = async () => {
    try {
      const method = selectRef.current.value;
      const url = process.env.REACT_APP_API_URL + urlRef.current.value;
      const payload = !payloadRef?.current.value
        ? null
        : JSON.parse(payloadRef.current.value);

      alert(
        "요청을 보냅니다.\n" + JSON.stringify({ method, url, payload }, null, 2)
      );
      await sendRequest(
        method,
        url,
        payload,
        {
          onSuccess: (res) => {
            console.log(res.data);
            alert("응답\n" + JSON.stringify(res.data, null, 2));
          },
          onFailure: (e) => {
            console.log(e);
            alert(
              "응답 실패\n" +
              JSON.stringify(
                e.response?.data || {
                  error: e.message,
                  message: "응답 데이터가 존재하지 않음.",
                },
                null,
                2
              )
            );
          },
        },
        true
      );
    } catch (e) {
      // handle SyntaxError
      if (e instanceof SyntaxError) {
        alert(`
            JSON 형식이 잘못되었습니다.

            {"key" : "value" , "key2" : "value2"} 형식이여야합니다.
            0. 쉽표(,)가 있는 지 확인해주세요.
            1. 키가 문자열로 묶여잇는지 확인해주세요. 
              key : "value" X, "key" : "value" O
            
            이거 아니면 나도모름.
            키도 ""로 묶어야됨.
          `);
      }
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

      <p>
        <h2>웹 모킹 테스트용 필드</h2>
        <p>
          <select name="Method" id="method" ref={selectRef}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELTE</option>
          </select>
          <input
            style={{
              width: "200px",
            }}
            type="text"
            placeholder={`/auth/login`}
            ref={urlRef}
          />
        </p>
        <p>
          <h3>전달할 데이터</h3>
          <textarea
            ref={payloadRef}
            type="text"
            placeholder={`URL의 경우, http://localhost:5000/api 이후 요소를 입력해주세요.
ex) /login 

전달할 데이터 json 형식
{
  "uesrId" : "admin",
  "password" : "1234"
}
            `}
            style={{
              width: "200px",
              height: "150px",
              textAlign: "center-vertical",
              padding: "50px",
            }}
          />
        </p>

        <button
          onClick={handleRequest}
          style={{
            ...navLinkStyle,
            border: "none",
          }}
        >
          전송하기
        </button>
      </p>
    </center>
  );
}

export default TempMain;

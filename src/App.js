import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashBoard from "./pages/AdminDashBoard";
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import MyHome from './pages/mypage/MyHome';
import Register from './pages/Register';
import Header from './components/header/Header';

function App() {
  // useEffect(() => {
  //   fetch('http:localhost:5000/api/auth').then(res => res.json()).then(data => console.log(data))
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashBoard />}>
          <Route path="dashboard" element={<div>대시보드</div>} />  
          <Route path="members" element={<div>회원관리 및 조회</div>} />  
          <Route path="logs" element={<div>활동 로그</div>} />  
          <Route path="register-festival" element={<div>축제 추가</div>} />  
          <Route path="inquiries" element={<div>고객 문의</div>} />  
        
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/mypage" element={<MyHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/header" element={<Header/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

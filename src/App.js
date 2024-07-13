import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashBoard from "./pages/AdminDashBoard";
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import MyHome from './pages/mypage/MyHome';
import Register from './pages/Register';
import { UserInquiries } from "./features/dashboard";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashBoard />}>
          <Route path="dashboard" element={<div>대시보드</div>} />  
          <Route path="members" element={<div>회원관리 및 조회</div>} />  
          <Route path="logs" element={<div>활동 로그</div>} />  
          <Route path="register-festival" element={<div>축제 추가</div>} />  
          <Route path="inquiries" element={<UserInquiries/>} />  
        
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/mypage" element={<MyHome />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

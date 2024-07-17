import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashBoard from "./pages/AdminDashBoard";
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Home from './pages/TempMain';
import Mypage from './pages/Mypage';
import Register from './pages/Register';
import { UserInquiries } from "./features/dashboard";
import RegisterForm from './features/register/pages/RegisterForm';
import FestivalDetail from "./pages/FestivalDetail";
import TempMain from "./pages/TempMain";
import InquiriesDetail from "./features/dashboard/pages/InquiriesDetail";
import ChatBot from './features/chatBot/ChatBot';

function App() {

  return (
    <BrowserRouter>
      <ChatBot />
      <Routes>
        <Route path="/" element={<TempMain />} />
        <Route path="/admin" element={<AdminDashBoard />}>
          <Route path="dashboard" element={<div>대시보드</div>} />
          <Route path="members" element={<div>회원관리 및 조회</div>} />
          <Route path="logs" element={<div>활동 로그</div>} />
          <Route path="register-festival" element={<div>축제 추가</div>} />
          <Route path="inquiries/*" element={<UserInquiries />} />
          <Route path="inquiries/detail/:id" element={<InquiriesDetail />} />
        </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/registerform" element={<RegisterForm />} />
          <Route path="/festivaldetail/:festivalId" element={<FestivalDetail />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

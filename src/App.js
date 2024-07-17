import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminDashBoard, Calendar, FestivalDetail, InfoAgreement, InquiriesDetail, Login, MydetailFrame, Mypage, Register, TempMain, UserFind, UserInquiries, Chatbot, RegisterForm } from "./pages";

import Header from "./components/header/Header";
import Home from './pages/Home';



function App() {

  return (
    <BrowserRouter>
      <Chatbot />
      <Routes>
        <Route path="/test" element={<TempMain />} />
        <Route path="/admin" element={<AdminDashBoard />}>
          <Route path="dashboard" element={<div>대시보드</div>} />
          <Route path="members" element={<div>회원관리 및 조회</div>} />
          <Route path="logs" element={<div>활동 로그</div>} />
          <Route path="register-festival" element={<div>축제 추가</div>} />
          <Route path="inquiries/*" element={<UserInquiries />} />
          <Route path="inquiries/detail/:id" element={<InquiriesDetail />} />
        </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/mydetail" element={<MydetailFrame />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/agreement" element={<InfoAgreement />} />
          <Route path="/register/registerform" element={<RegisterForm />} />
          <Route path="/userfind" element={<UserFind />} />
          <Route path="/festivaldetail/:festivalId" element={<FestivalDetail />} />
        <Route path="/header" element={<Header />} />
        {/* <Route path="/results" element={<Result />}/> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

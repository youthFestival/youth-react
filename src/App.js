import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AdminDashBoard,
  Calendar,
  FestivalDetail,
  InquiriesDetail,
  Login,
  MydetailFrame,
  Mypage,
  Register,
  TempMain,
  UserFind,
  UserInquiries,
  Chatbot,
  RegisterForm,
  List,
  MemberManagement,
  PrivacyPolicy
} from "./pages";

import Ranking from "./components/ranking/Ranking";
import Home from './pages/Home';
import { Navigate } from 'react-router-dom';
import {
  EditProfile,
  EditArtist,
  Inquiries,
  InquiriesSave,
  DeleteAccount,
  InquiriesList
} from './features/usermanagement/index.js';

// test
import EditProfileModal from "./features/dashboard/components/EditProfileModal.jsx";
import OpenTicket from "./features/list/component/OpenTicket.jsx";

import AuthHandler from './pages/AuthHandler.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashBoard />}>
          <Route path="dashboard" element={<div>대시보드</div>} />
          <Route path="members/*" element={<MemberManagement />} />
          <Route path="logs" element={<div>활동 로그</div>} />
          <Route path="register-festival" element={<div>축제 추가</div>} />
          <Route path="inquiries/*" element={<UserInquiries />} />
          <Route path="inquiries/detail/:id" element={<InquiriesDetail />} />
        </Route>
        <Route path="/" element={<>
          <Home />
          <Chatbot />
        </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/kakao" element={<AuthHandler />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mydetail" element={<MydetailFrame />}>
          <Route index element={<Navigate to="edit-profile" />} />
          <Route path='edit-profile' element={<EditProfile />} />
          <Route path='edit-artist' element={<EditArtist />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='inquiries' element={<Inquiries />} />
          <Route path='inquiries-save' element={<InquiriesSave />} />
          <Route path='inquiries-list' element={<InquiriesList />} />
          <Route path='qna' element={<div>test</div>} />
          <Route path='comments' element={<div>test</div>} />
          <Route path='deletion' element={<DeleteAccount />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/register/agreement" element={<PrivacyPolicy />} />
        <Route path="/register/registerform" element={<RegisterForm />} />
        <Route path="/userfind" element={<UserFind />} />
        <Route path="/festivaldetail/:festivalId" element={<FestivalDetail />} />
        <Route path="/list" element={<List />} />
        <Route path="/ranking" element={<Ranking />} />

        <Route path="/test">
          <Route path="" element={<TempMain />} />
          <Route path="editor" element={<EditProfileModal />} />
          <Route path="openticket" element={<OpenTicket/>}/>
  
        </Route>

      </Routes>


    </BrowserRouter>
  );
}

export default App;

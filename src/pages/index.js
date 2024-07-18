import AdminDashBoard from "./AdminDashBoard";
import Calendar from "./Calendar";
import FestivalDetail from "./FestivalDetail";
import Home from "./Home";
import Login from "./Login";
import Mypage from "./Mypage";
import Listpage from './Listpage';

// 회원가입 옵션 페이지, 및 회원가입 입력 페이지
import Register from "./Register";
import RegisterForm from "../features/register/pages/RegisterForm";

import TempMain from "./TempMain";

// 관리자 페이지
// export pages
import UserInquiries from "../features/dashboard/pages/UserInquiries"
import InquiriesDetail from "../features/dashboard/pages/InquiriesDetail"
import MemberManagement from "../features/dashboard/pages/MemberManagement";


// 마이페이지 및 회원가입
import { MydetailFrame } from "../features/usermanagement";
import { InfoAgreement } from "../features/register";

// 아이디 및 비밀번호 찾기
import UserFind from "../features/userfind/pages/UserFind";

// 챗봇
import Chatbot from "../features/chatBot/ChatBot";




export { 
    AdminDashBoard, 
    Calendar, 
    FestivalDetail, 
    Home, 
    Login, 
    Mypage, 
    Register, 
    TempMain, 
    UserInquiries, 
    InquiriesDetail, 
    MydetailFrame, 
    InfoAgreement, 
    UserFind, 
    Chatbot, 
    RegisterForm, 
    Listpage,
    MemberManagement
};
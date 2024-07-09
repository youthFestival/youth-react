import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashBoard from "./pages/AdminDashBoard";
import Login from './components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <ChatApp/>이 여기 들어갈 예정 */}
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashBoard from "./pages/AdminDashBoard";
import Login from './pages/Login';
import Calendar from './pages/Calendar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

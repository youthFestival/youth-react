import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashBoard from "./pages/AdminDashBoard";
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Home from './pages/Home';

function App() {
  // useEffect(() => {
  //   fetch('http:localhost:5000/api/auth').then(res => res.json()).then(data => console.log(data))
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

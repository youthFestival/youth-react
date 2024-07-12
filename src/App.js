import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatBot from './features/chatBot/ChatBot';

function App() {
  return (
    <BrowserRouter>
      <ChatBot />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

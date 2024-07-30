import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.css";
import { AuthContextProvider } from './contexts/AuthContext';
import Modal from 'react-modal';


async function deferRender() {
  if (process.env.REACT_APP_USE_MOCK === "false") {
    console.log("%c[🌱Spring] 스프링 서버와 연결합니다.", "font-weight: bold; color:forestgreen; ");
    return;
  }
    console.log("%c[📝MSW] MSW 서버와 연결합니다.","font-weight: bold; color:darkred;");
  const { worker } = await import('./mocks/browser');
    return worker.start({
      onUnhandledRequest: 'bypass', // 일치하지 않는 요청을 무시하고 통과시킵니
  });
}

deferRender().then(() => {
  Modal.setAppElement('#root');
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
})

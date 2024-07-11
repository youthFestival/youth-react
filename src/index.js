import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.css";
import { AuthContextProvider } from './contexts/AuthContext';


async function deferRender() {
  const { worker } = await import('./mocks/browser');
  return worker.start({
    onUnhandledRequest: 'bypass', // 일치하지 않는 요청을 무시하고 통과시킵니
  });
}

deferRender().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
})

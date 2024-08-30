import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './telas/login/Login.jsx'
import Home from './telas/home/home.jsx'
import Chat from './telas/chat/chat.jsx'
import './index.css'




const App = () => (
  <Routes>
    <Route path="https://VitorHasc.github.io/chat-api-desingII" element={<Navigate to="/login" />} />
    <Route path="https://VitorHasc.github.io/chat-api-desingII" element={<Login />} />
    <Route path="https://VitorHasc.github.io/chat-api-desingII" element={<Home />} />
    <Route path="https://VitorHasc.github.io/chat-api-desingII" element={<Chat />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
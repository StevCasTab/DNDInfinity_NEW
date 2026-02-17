import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/Login.tsx';
import CreateCharacter from './Pages/CreateCharacter.tsx';

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateCharacter />} />
          {/* <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </GoogleOAuthProvider>
)

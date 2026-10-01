import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx';
import { CartProvider } from './context/CartContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '1234567890-example.apps.googleusercontent.com';

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <BrowserRouter>
    <AuthProvider>
      <CartProvider>
    <App />
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)

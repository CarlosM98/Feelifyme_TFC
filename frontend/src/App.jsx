import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import "./styles/comun.css";

import { 
  Inicio, 
  ComoFunciona, 
  Curiosidades, 
  SobreNosotros, 
  Contacto, 
  RegistroPage, 
  LoginPage, 
  NotFoundPage 
} from './pages/public';

import { 
  MisEmociones, 
  RegistroEmocion 
} from './pages/private';

import { PublicLayout, LayoutApp, PrivateLayout } from './layouts';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route element={<LayoutApp />}>

            <Route element={<PublicLayout />}>
              <Route path="/" element={<Inicio />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/registro" element={<RegistroPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route element={<PrivateLayout />}>
              <Route path="/calendario" element={<MisEmociones />} />
              <Route path="/registro-emocion" element={<RegistroEmocion />} />
            </Route>

          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

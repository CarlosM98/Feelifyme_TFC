import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import "./styles/comun.css";

import Inicio from './pages/public/Inicio';
import ComoFunciona from './pages/public/ComoFunciona';
import Curiosidades from './pages/public/Curiosidades';
import SobreNosotros from './pages/public/SobreNosotros';
import Contacto from './pages/public/Contacto';
import RegistroPage from './pages/public/RegistroPage';
import LoginPage from './pages/public/LoginPage';

import { MisEmociones } from './pages/private/MisEmociones';
import { RegistroEmocion } from './pages/private/RegistroEmocion';

import NotFoundPage from './pages/public/NotFoundPage';

import PublicLayout from './layouts/PublicLayout';
import LayoutApp from './layouts/LayoutApp';
import PrivateLayout from './layouts/PrivateLayout';

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

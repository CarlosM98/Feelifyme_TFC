import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import "./styles/comun.css";

import { Suspense, lazy } from 'react';
import { Spinner } from './componentes/generales/spinner/Spinner';

// Imports Perezosos (Generan chunks separados al compilar para optimización E2E)
const Inicio = lazy(() => import('./pages/public/Inicio.jsx').then(m => ({ default: m.Inicio })));
const ComoFunciona = lazy(() => import('./pages/public/ComoFunciona.jsx').then(m => ({ default: m.ComoFunciona })));
const Curiosidades = lazy(() => import('./pages/public/Curiosidades.jsx').then(m => ({ default: m.Curiosidades })));
const SobreNosotros = lazy(() => import('./pages/public/SobreNosotros.jsx').then(m => ({ default: m.SobreNosotros })));
const Contacto = lazy(() => import('./pages/public/Contacto.jsx').then(m => ({ default: m.Contacto })));
const RegistroPage = lazy(() => import('./pages/public/RegistroPage.jsx').then(m => ({ default: m.RegistroPage })));
const LoginPage = lazy(() => import('./pages/public/LoginPage.jsx').then(m => ({ default: m.LoginPage })));
const NotFoundPage = lazy(() => import('./pages/public/NotFoundPage.jsx').then(m => ({ default: m.NotFoundPage })));

const MisEmociones = lazy(() => import('./pages/private/MisEmociones.jsx').then(m => ({ default: m.MisEmociones })));
const RegistroEmocion = lazy(() => import('./pages/private/RegistroEmocion.jsx').then(m => ({ default: m.RegistroEmocion })));
const ResumenDiarioCronológico = lazy(() => import('./pages/private/ResumenDiarioCronológico.jsx').then(m => ({ default: m.ResumenDiarioCronológico })));

import { PublicLayout, LayoutApp, PrivateLayout } from './layouts';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
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
                <Route path="/resumen-diario-cronologico/:fecha" element={<ResumenDiarioCronológico />} />
              </Route>

            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

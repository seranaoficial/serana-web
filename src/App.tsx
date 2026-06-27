/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import SerenaSplash from './components/SerenaSplash';
import ScrollVine from './components/ScrollVine';
import { AuthProvider } from './components/AuthProvider';

// Eager: tiny pages that the user lands on most often.
import HomePage from './pages/HomePage';

// Lazy: each route is its own chunk so the home page boots fast.
const ShopPage = lazy(() => import('./pages/ShopPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const CheckoutResultPage = lazy(() => import('./pages/CheckoutResultPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const PrivacidadPage = lazy(() => import('./pages/PrivacidadPage'));
const TerminosPage = lazy(() => import('./pages/TerminosPage'));
const DevolucionesPage = lazy(() => import('./pages/DevolucionesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Heavy non-critical UI: defer until idle so they don't block first paint.
const LivingBackground = lazy(() => import('./components/LivingBackground'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-serana-cream">
      <div className="w-8 h-8 border-4 border-serana-forest/20 border-t-serana-forest rounded-full animate-spin" aria-label="Cargando" />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <SerenaSplash />
        <CustomCursor />
        <Suspense fallback={null}>
          <LivingBackground />
        </Suspense>
        <ScrollVine />
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/menu" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/comunidad" element={<CommunityPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout/success" element={<CheckoutResultPage variant="success" />} />
            <Route path="/checkout/failure" element={<CheckoutResultPage variant="failure" />} />
            <Route path="/checkout/pending" element={<CheckoutResultPage variant="pending" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cuenta" element={<AccountPage />} />
            <Route path="/reset-password" element={<Navigate to="/login" replace />} />
            <Route path="/auth/callback" element={<Navigate to="/login" replace />} />
            <Route path="/auth/confirm" element={<Navigate to="/login" replace />} />
            <Route path="/auth/reset-password" element={<Navigate to="/login" replace />} />
            <Route path="/auth/verify" element={<Navigate to="/login" replace />} />
            <Route path="/password-reset" element={<Navigate to="/login" replace />} />
            <Route path="/recuperar-contrasena" element={<Navigate to="/login" replace />} />
            <Route path="/restablecer-contrasena" element={<Navigate to="/login" replace />} />
            <Route path="/privacidad" element={<PrivacidadPage />} />
            <Route path="/terminos" element={<TerminosPage />} />
            <Route path="/devoluciones" element={<DevolucionesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

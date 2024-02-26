import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './Routes';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <StrictMode>
        <AppRoutes />
    </StrictMode>
  </BrowserRouter>
);
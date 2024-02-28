import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <AppRoutes />
      </StrictMode>
    </QueryClientProvider>
  </BrowserRouter>
);
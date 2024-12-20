import { StrictMode, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import './index.css';
import './App.css';

import Home from './pages/home/page.tsx';
import Store from './entities/store/store.ts';
import { ContestPage } from './pages/contest-page/page.tsx';
import { RootLayout } from './shared/components';

const store = new Store();

export const Context = createContext({ store });

createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{ store }}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          {/* Эта обертка будет для всех вложенных маршрутов */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contest/:contestId" element={<ContestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Context.Provider>
);

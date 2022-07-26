import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Index from './routes/Index';
import AnimeInfo from './routes/AnimeInfo';
import Search from './routes/Search';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );
root.render(
  <React.StrictMode>
    <meta name='theme-color' content={getComputedStyle(document.documentElement).getPropertyValue('--bg-color')} media='(prefers-color-scheme: dark)' />
    <HashRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/search' element={<Search />} />
        <Route path='/anime' element={<AnimeInfo />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

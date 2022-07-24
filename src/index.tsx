import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './routes/App';
import AnimeInfo from './routes/AnimeInfo';
import Search from './routes/Search';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/search' element={<Search />} />
        <Route path='/anime' element={<AnimeInfo />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

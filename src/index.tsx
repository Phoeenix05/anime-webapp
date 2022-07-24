import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AnimeInfo from './AnimeInfo';
import Search from './Search';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement );
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/search' element={<Search />}></Route>
        <Route path='/anime' element={<AnimeInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

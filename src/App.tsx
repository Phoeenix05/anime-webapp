import { Route, Routes } from '@solidjs/router';
import { lazy } from 'solid-js';

const Home = lazy(() => import('./pages/Home'))
const Anime = lazy(() => import('./pages/Anime'))
const Search = lazy(() => import('./pages/Search'))

export default function App() {
  return <>
    <Routes>
      <Route path="/" component={Home} />
      {/* <Route path="/anime" component={Anime} /> */}
      <Route path="/anime/:id" component={Anime} />
      <Route path="/search" component={Search} />
      <Route path="/*" element={<h1>Not found</h1>} />
    </Routes>
  </>
}

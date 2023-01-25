import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Search from './pages/Search';
import Movie from './pages/Movie';
import PopularMovies from './pages/PopularMovies';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>  {/* AS rotas giram em torno do component do App */}

            <Route path="/" element={<Home/>}/>
            <Route path="popular" element={ <PopularMovies/> }/>
            <Route path="movie/:id" element={<Movie/>}/>
            <Route path="search" element={<Search/>}/>

        </Route>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)

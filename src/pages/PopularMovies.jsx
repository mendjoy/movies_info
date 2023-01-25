import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

//css
import "./MoviesGrid.css"

const moviesURL  = import.meta.env.VITE_API; 
const apiKey = import.meta.env.VITE_API_KEY; 

const PopularMovies = () => {

  const [popularMovies, setPopulartMovies] = useState([]); 

  const getPopularMovies = async (url) => {

    const res = await fetch(url);
    const data = await res.json();

    setPopulartMovies(data.results); 

  };

  useEffect(() => {  
      
    const popularMoviestUrl = `${moviesURL}/popular?${apiKey}`; 

    getPopularMovies(popularMoviestUrl); 

    
  },[])
  
  return (
    <div className="container">
      <h2 className="title">Popular Movies</h2>
      <div className="movies-container">
      {popularMovies.length === 0  && <p>Carregando...</p>}
      {popularMovies.length > 0 && popularMovies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
      
    </div>
  )
}

export default PopularMovies;
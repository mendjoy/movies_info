import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

//css
import "./MoviesGrid.css"

const moviesURL  = import.meta.env.VITE_API; //IMPORTADO DO .ENV
const apiKey = import.meta.env.VITE_API_KEY; 

const Home = () => {

  const [topMovies, setTopMovies] = useState([]); //dados iniciais dos top filmes 

  const getTopRatedMovies = async (url) => {

    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results); // espera a requisição de top filmes para acessa-los
  };

  useEffect(() => {  //A função getTopRatedMovies será executada quando a pagina for carregada (array vazio)
      
    const topRatedUrl = `${moviesURL}/top_rated?${apiKey}`; //url com a key para acessar os filmes

    getTopRatedMovies(topRatedUrl); //função chamada com a url

    
  }, [])
  
  return (
    <div className="container">
      <h2 className="title">Top Rated</h2>
      <div className="movies-container">
      {topMovies.length === 0  && <p>Carregando...</p>}
      {topMovies.length > 0 && topMovies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
      
    </div>
  )
}

export default Home
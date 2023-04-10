import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import './Home.css';

function Home() {
  const [trending, setTrending] = useState([]);

  async function getTrendingMovies() {
    const url = process.env.REACT_APP_SERVER_URL
    const response = await fetch(`${url}/trending`);
    const data = await response.json();
    setTrending(data.results);
  }

  function commentHandler(newMovie, id) {
    trending.map(movie => {
      if (movie.id === id) {
        movie.comment = newMovie.userComment
        return movie;
      } else {
        return movie
      }
    })
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div className='home-container'>
      <h1>Trending Movies</h1>
      <MovieList movies={trending} commentHandler={commentHandler} />
    </div>
  );
}

export default Home;

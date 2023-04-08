import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList'

function Home() {
  const [trending, setTrending] = useState([]);
  async function getTrendingMovies() {
    const url = process.env.REACT_APP_SERVER_URL
    const response = await fetch(`${url}/trending`);
    const data = await response.json();
    setTrending(data);
  }
  useEffect(() => {
    getTrendingMovies();
  }, []);
  return (
    <div className='home-container'>
      <h1>Trending Movies</h1>
      <MovieList movies={trending} />
    </div>
  );
}

export default Home;

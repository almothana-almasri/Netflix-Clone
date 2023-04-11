import Movie from '../Movie/Movie';

function MovieList(props) {
  return (
    <div className="movie-list">
      {
        props.movies.map(movie => {
          return (
            <Movie key={movie.id} movie={movie} commentHandler={props.commentHandler}/>
          )
        })
      }
    </div>
  )
}

export default MovieList;

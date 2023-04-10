import React, { useState } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Movie(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="movie-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>{props.movie.overview}</Card.Text>
          <Button variant={isFavorite ? "danger" : "primary"} onClick={handleFavorite}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
        </Card.Body>
      </Card>

      <ModalMovie movieData={props.movie} commentHandler={props.commentHandler}/>
    </div>
  );
}

export default Movie;
import React, { useState } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Movie(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="movie-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>{props.movie.overview.substring(0, 100)}</Card.Text>
          <Button variant="primary" onClick={handleShow}>show details</Button>
        </Card.Body>
      </Card>

      <ModalMovie show={show}  handleClose={handleClose} movieData = {props.movie} commentHandler={props.commentHandler}/>   </div>
  );
}

export default Movie;
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalMovie(props) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddToFavorite = async () => {
    const url = process.env.REACT_APP_SERVER_URL;
    const response = await fetch(`${url}/addMovie`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movie: props.movieData,
        comment: comment,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.movieData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`}
          alt={props.movieData.title}
        />
        <div>
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddToFavorite}>
          Add to Favorites
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;

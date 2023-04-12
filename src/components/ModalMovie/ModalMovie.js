import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { useRef } from 'react';
import './ModalMovie.css'


export default function ModalMovie(props) {
  const commentRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    let userComment = commentRef.current.value;
    let newMovie = { ...props.movieData, userComment }
    props.commentHandler(newMovie, newMovie.id);
  }
  async function addToFavHandler(e, movie) {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER_URL}/addMovie`;
    let data = {
      id: props.movieData.id,
      title: props.movieData.title,
      overview: props.movieData.overview,
      poster_path: `https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`,
      comment: props.movieData.comment
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const receivedData = await response.json();
    if (response.status === 201) {
      alert("successfully added to database")
    }
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.movieData.title}</Modal.Title>
      </Modal.Header>
      <img src={`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`} alt={props.movieData.title} />
      <Modal.Body>
        {props.movieData.overview.substring(0, 100)}
        <br />
        <br />
        {props.movieData.comment ? props.movieData.comment : "No comment Added "}
        <br />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add a comment</Form.Label>
            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment " />
            <Form.Text className="text-muted">enter your comment !!</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}> Submit</Button>
          <Button variant="primary" type="submit" onClick={(e) => addToFavHandler(e)}> add to fav</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>
  );
}
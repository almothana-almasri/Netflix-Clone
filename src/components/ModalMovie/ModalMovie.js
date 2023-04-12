import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { useRef } from 'react';

function ModalMovie(props) {
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
              <Form.Control type="text" placeholder="Enter your comment " />
              <Form.Text className="text-muted">enter your comment !!</Form.Text>
            </Form.Group>
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

export default ModalMovie;
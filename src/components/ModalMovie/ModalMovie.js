import Modal from 'react-bootstrap/Modal';

function ModalMovie(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{props.movieData.title}</Modal.Title>
            </Modal.Header>
            <img src={`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`} alt={props.movieData.title} />
            <Modal.Body>{props.movieData.overview}</Modal.Body>
        </Modal>
    );
}

export default ModalMovie;
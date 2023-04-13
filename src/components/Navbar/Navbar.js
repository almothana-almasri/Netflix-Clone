import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

function NavBar() {
  return (
    <Nav className="navbar">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/FavList">Favorite List</Nav.Link>
    </Nav>
  );
};

export default NavBar;

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import iHeader from '../../interface/iheader';
import '../../css/header.css';

const Header: React.FC<iHeader> = ({ setActiveSection, activeSection }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="fixed-navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
        <img 
          src="/images/Log.png" 
          alt="Josu-dev Logo" 
          className="navbar-logo"
        />
        <span className="brand-text"></span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-3 navbar-links">
          <Nav.Link 
            as={Link} 
            to="/" 
            active={activeSection === 'home'} 
            onClick={() => setActiveSection('home')}
            className="nav-link-custom"
          >
            Inicio
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/skills" 
            active={activeSection === 'skills'} 
            onClick={() => setActiveSection('skills')}
            className="nav-link-custom"
          >
            Habilidades
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/projects" 
            active={activeSection === 'projects'} 
            onClick={() => setActiveSection('projects')}
            className="nav-link-custom"
          >
            Proyectos
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
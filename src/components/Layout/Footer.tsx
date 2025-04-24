import { Navbar, Nav } from 'react-bootstrap';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaRegCopyright 
} from 'react-icons/fa';
import '../../css/footer.css';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="footer-container">
      <Navbar.Text className="footer-copyright">
        <FaRegCopyright className="me-2" />
        {new Date().getFullYear()} Josu-dev - Todos los derechos reservados
      </Navbar.Text>
      <Nav className="footer-social-icons">
        <Nav.Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </Nav.Link>
        <Nav.Link href="https://github.com/J-osu" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </Nav.Link>
        <Nav.Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
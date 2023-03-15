import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/img/logo.png'
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="primary">
        <Container>
          <img src={logo} class="img-fluid" alt="logo" />
          <Navbar.Brand href="#home"><strong>NeoSounds</strong></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Headphones">Headphones</Nav.Link>
            <Nav.Link href="#Speakers">Speakers</Nav.Link>
            <Nav.Link href="#SoundCards">Sound Cards</Nav.Link>

          </Nav>

        </Container>
        <CartWidget />
        <ItemListContainer greeting = {0}/>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;
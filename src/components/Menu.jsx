import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'
import { useSelector} from 'react-redux';



function BasicExample() {
  const cartProducts = useSelector(state => state.cart);
  const navigate = useNavigate()
  


  // Display All Cart Product
  const handleCartProduct = () => {
    navigate("cart")
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Redux-Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="product">Product</Nav.Link>
            <Nav.Link as={Link} to="cart">Cart</Nav.Link>
          </Nav>
            <Nav.Link as={Link} to="cart" onClick={() => handleCartProduct()}>
             <FiShoppingCart />
             <span>{cartProducts.length}</span>
            </Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
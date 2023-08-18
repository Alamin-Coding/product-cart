import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import statusCode from "../utils/statusCode"
import { remove } from "../store/slices/cartSlice"
import '../styles/cart.css'

// Toastify Alert
import { ToastContainer, toast } from 'react-toastify'
import Rating from "react-rating"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"


const Cart = () => {
  const data = useSelector( (state) => state.cart );
  const dispatch = useDispatch();


  const notify = () => toast.info('Product Remove successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

  // Remove Product event
  const handleRemoveToCart = (id) => {
    notify();
    dispatch(remove(id));
  }
  // 
  // cart style
  const cartStyle = {
    padding: "200px"
  }

  return (
    <section className="product">
      <ToastContainer />
    <Container>
      <h2>All Products</h2>
      {status === statusCode.LOADING && <h2>Loading ...</h2>}
      <Row>
        {
          data.length > 0 ? data.map((product) => {
            const { id, title, description, image, price, rating } = product
            const { rate } = rating
            return (
              <Col md={3} key={id}>
                <div className="product_item">
                <div className="image">
                  <Image src={image} alt={title} className="img-fluid w-100" />
                </div>
                <div className="text">
                  <Link to={"/"}>{title}</Link>
                  <p>{description.slice(0,80)}...</p>
                  <div className="price_rating">
                    <span><b>Price: </b>{price}</span>
                    <span style={{color: "gold"}}>
                      <Rating
                        initialRating={rate}
                        emptySymbol={<AiOutlineStar />}
                        fullSymbol={<AiFillStar />}
                      />
                      </span>
                  </div>
                  <Button onClick={() => handleRemoveToCart(id)}>Add To Cart</Button>
                </div>
                </div>
              </Col>
            )
          })
          :
          <h2 style={cartStyle}>Your Cart is Empty</h2>
        }
      </Row>
    </Container>
   </section>
  )
}

export default Cart

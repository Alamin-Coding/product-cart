import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../store/slices/productSlice";
import statusCode from "../utils/statusCode";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { add } from "../store/slices/cartSlice";
import {AiFillStar, AiOutlineStar} from "react-icons/ai"

// Toastify Alert
import { ToastContainer, toast } from 'react-toastify';
import ProductSearch from "./productSearch";
import Rating from "react-rating";
import '../styles/cart.css';
import ProductLoading from "../loading/ProductLoading";







const Product = () => {
  let [inputValue, setInputValue] = useState([])
  const {data, status} = useSelector(state => state.product);
  const searchProductList = data.filter(item => item.category.includes(inputValue))
  // console.log(searchProductList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(data))
  }, [])

  // Toastify Alert
  const notify = () => toast.success('Product add successfully', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  // add Events
  const handleAddToCart = (product) => {
    dispatch(add(product));
    notify()
  }

  // Search event
  const handleInput = (e) => {
    setInputValue(e.target.value)
  }


 return (
   <section className="product">
    <ToastContainer />
    <Container>
      <h2>All Products</h2>
      <ProductSearch onSearch={handleInput}/>
      
      <Row>
      {status === statusCode.LOADING && <ProductLoading cards={20} />}
        {
          searchProductList.map((product) => {
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
                    <div className="price_rating ">
                      <span><b>Price: $</b>{price}</span>
                      <span style={{color: "gold"}}>
                      <Rating
                        initialRating={rate}
                        emptySymbol={<AiOutlineStar />}
                        fullSymbol={<AiFillStar />}
                      />
                      </span>
                    </div>
                    <Button onClick={() => handleAddToCart(product)}>Add To Cart</Button>
                  </div>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </Container>
   </section>
 )
}

export default Product
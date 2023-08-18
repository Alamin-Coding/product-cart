/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";
import '../styles/product-search.css';

const ProductSearch = ({onSearch}) => {
  return (
    <section>
      <Container>
       <Row>
        <Col md={12}>
         <div className="product_search">
          <input onChange={onSearch} type="search" placeholder="Search product by category..." />
         </div>
        </Col>
       </Row>
      </Container>
    </section>
  )
}

export default ProductSearch

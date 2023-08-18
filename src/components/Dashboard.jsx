import { Col, Container, Row } from "react-bootstrap"
import ProductSearch from "./productSearch"

const Dashboard = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12}>
            <div className="banner_text text-center p-5">
            <h1>Dashboard</h1>
            <p>I Got clear understand about REDUX-TOOLKIT by creating this project </p>
            </div>
          </Col>
          <Col md={12}>
            <ProductSearch />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Dashboard

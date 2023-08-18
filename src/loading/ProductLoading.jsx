import { Col } from "react-bootstrap";
// Loading animation
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductLoading = ({cards}) => {
 console.log(cards);
  return Array(cards)
         .fill(0)
         .map((_, i) => (
          <Col md={3} key={i}>
           <div className="product_item">
             <Skeleton height={200} />
             <Skeleton count={2} height={25} />
             <Skeleton count={3} />
             <Skeleton count={1} width={100} height={40} />
           </div>
         </Col>
         ))
};

export default ProductLoading;

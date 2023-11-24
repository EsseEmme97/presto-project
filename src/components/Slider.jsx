import { Carousel } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../css/Slider.css"

function Slider() {
  return (
    <Col md={6}>
      <Carousel controls={false} indicators={false} interval={3000}>
        <Carousel.Item>
          <img src="https://picsum.photos/1080" className="slider-image"></img>
        </Carousel.Item>
        <Carousel.Item>
		<img src="https://images.pexels.com/photos/18983851/pexels-photo-18983851/free-photo-of-a-woman-with-red-hair-sitting-on-a-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="slider-image"></img>
        </Carousel.Item>
        <Carousel.Item>
		<img src="https://images.pexels.com/photos/15545361/pexels-photo-15545361/free-photo-of-photo-of-a-pomegranate-fruit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="slider-image"></img>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}

export default Slider;

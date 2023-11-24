import { Container,Row,Col, Button } from "react-bootstrap";
import Slider from "./Slider";


function Business () {
	return (<Container className="mt-5 bg-light">
		<Row>
			<Col md={6}>
				<h2 className="mt-5 fs-1">Trova i migliori affari nella tua città</h2>
				<p className="mt-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare justo et elementum imperdiet. Quisque vel velit nisi. Morbi fermentum sapien dui, at congue arcu interdum a. Duis a tellus.</p>
				<Button variant="success" className="mt-5 primary-bg">Inizia ora</Button>
			</Col>
			<Slider></Slider>
		</Row>
	</Container>)

}

export default Business;
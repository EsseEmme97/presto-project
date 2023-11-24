import { Container,Row,Col } from "react-bootstrap";
import WorkWithUsForm from "./WorkWithUsForm";

function WorkWithUs(){
	return <Container className="mt-5 bg-light">
	<Row>
		<Col md={6}>
			<img src="src\assets\workWithUs.jpg" className="mw-100"></img>
		</Col>
		<Col md={6}>
			<WorkWithUsForm/>
		</Col>
	</Row>
	</Container>
}

export default WorkWithUs;
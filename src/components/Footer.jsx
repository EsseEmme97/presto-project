import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container className="mt-5 bg-dark p-5 heebo">
      <Row className="justify-content-between">
        <Col md={3}>
          <h3 className="primary-color">I nostri contatti</h3>
          <div className="text-white d-flex align-items-center mt-3">
            <FontAwesomeIcon icon={faLocationPin} className="me-3" />
            <p className="my-auto">Strada Provinciale,123,Roma</p>
          </div>
          <div className="text-white d-flex align-items-center mt-3">
            <FontAwesomeIcon icon={faPhone} className="me-3" />
            <p className="my-auto">+39 333333333</p>
          </div>
          <div className="text-white d-flex align-items-center mt-3">
            <FontAwesomeIcon icon={faEnvelope} className="me-3" />
            <p className="my-auto">info@example.com</p>
          </div>
          <div className="text-white d-flex align-items-center mt-3">
            <FontAwesomeIcon icon={faTwitter} className="brand-footer-icon" />
            <FontAwesomeIcon icon={faFacebook} className="brand-footer-icon" />
            <FontAwesomeIcon icon={faYoutube} className="brand-footer-icon" />
            <FontAwesomeIcon icon={faLinkedin} className="brand-footer-icon" />
          </div>
        </Col>
        <Col md={3}>
          <h3 className="primary-color">Link Utili</h3>
		  <Link to="/ads" className="text-white d-block mt-3">Annunci</Link>
		  <a href="mailto:info@presto.it?subject=richiesta Informazioni&body=Buongiorno, ho trovato questo annuncio e vorrei richiedere maggiori informazioni" className="d-block mt-3 text-white">Contattaci</a>
        </Col>
		<Col md={3}>
			<h3 className="primary-color">Newsletter</h3>
			<p className="text-white mt-3">Iscriviti alla Newsletter</p>
			<Form className="border-white" >
				<Form.Group className="d-flex mt-3">
					<Form.Control type="email" placeholder="email" ></Form.Control>
					<Button variant="success" className="primary-bg ms-2">Invia</Button>
				</Form.Group>
			</Form>
		</Col>
      </Row>
    </Container>
  );
}

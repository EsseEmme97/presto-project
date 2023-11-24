import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/SingleCategory.css"

function SingleCategory(props) {
  return (
    <Col  md={3} className="category-card">
      <FontAwesomeIcon icon={props.icon} className="fwa-icon category-icon"/>
      <h2>{props.name}</h2>
      <p className="primary-color">{`${props.announcementsCount} annunci`}</p>
    </Col>
  );
}

export default SingleCategory;

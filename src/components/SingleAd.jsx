import { Col } from "react-bootstrap";
import "../css/SingleAd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTag } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SingleAd(props) {
  return (
    <Col md={3} className="shadow rounded border py-0 px-0">
      <div className="overflow-hidden position-relative">
        <Badge
          bg={props.type === "sell" && "danger"}
          className={`badge-status text-uppercase ${
            props.type === "search" && "primary-bg"
          }`}
        >
          {props.type}
        </Badge>
        <img
          className="mw-100 rounded card-img"
          src="https://picsum.photos/1080"
        ></img>
      </div>

      <div className="p-2 my-2">
        <p className="primary-color fs-4 fw-bolder mb-0">{`${props.price} €`}</p>
        <h3 className="fs-4 mb-0">{props.name}</h3>
        <Link to={`/ads/${props.id}`}>
          <p className="text-muted">Lorem ipsum</p>
        </Link>
      </div>
      <div className="card-footer-container">
        <div className="card-footer rounded">
          <FontAwesomeIcon icon={faCalendar} className="me-1" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div className="card-footer rounded">
          <FontAwesomeIcon icon={faTag} className="me-1" />
          <span>{props.category}</span>
        </div>
      </div>
    </Col>
  );
}
